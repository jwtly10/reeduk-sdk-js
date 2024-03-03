// @ts-check
const axios = require('axios').default
const utils = require('./utils.js')

const { API_URL, API_VERSION } = require('./constants.js')

const BASE_URL = `${API_URL}${API_VERSION}`

class Client {
    /**
     * @param {string} apiKey The API key to use for requests
     */
    constructor(apiKey) {
        this.apiKey = apiKey
    }

    /**
     * A generator function to fetch all jobs for given search params, and return an iterator
     * This method is built to give you some control over the pagination of the results
     * see /examples/getAllJobs.js for usage examples
     * @param {import('./types').JobSearchParams} params The parameters for the request
     * @returns {AsyncGenerator<import('./types').Job[]>} A generator function to fetch jobs
     */
    async *getAllJobsIter(params) {
        let totalFetched = 0
        let totalAvailable = Infinity

        while (totalFetched < totalAvailable) {
            params.resultsToSkip = totalFetched
            const response = await this.newJobSearch(params)
            yield response.results
            totalAvailable = response.totalResults
            totalFetched += response.results.length
        }
    }

    /**
     * Create a new request to the Reed API for job searching
     * This method is exposed to give you control over the pagination of the results
     * if you don't like the default pagination
     * params.resultsToSkip is used to skip n results
     * params.resultsToTake is used to return n results, the default and limit is 100
     * @param {import('./types.js').JobSearchParams} params
     * @returns {Promise<import('./types.js').JobSearchResponse>} job search response object
     */
    async newJobSearch(params) {
        const jobSearchUrl = `${BASE_URL}/search`
        const token = Buffer.from(`${this.apiKey}:`, 'utf8').toString('base64')
        const headers = {
            Authorization: `Basic ${token}`,
        }

        const url = utils.constructUrlWithQueryParams(jobSearchUrl, params)

        try {
            const response = await axios.get(url, { headers, params })
            const res = {
                results: response.data.results,
                totalResults: response.data.totalResults,
            }
            return Promise.resolve(res)
        } catch (error) {
            if (error.response) {
                throw new Error(
                    `API request failed with status ${error.response.status}: ${error.response.data}`,
                )
            } else if (error.request) {
                throw new Error(
                    'The request was made but no response was received',
                )
            } else {
                throw new Error(
                    'Error setting up the request: ' + error.message,
                )
            }
        }
    }

    /**
     * Get the details of a job by its id
     * @param {number} jobId The id of the job to fetch
     * @returns {Promise<import('./types.js').Job>} The job details object
     */
    async getJobDetails(jobId) {
        const jobDetailsUrl = `${BASE_URL}/jobs/${jobId}`
        const token = Buffer.from(`${this.apiKey}:`, 'utf8').toString('base64')
        const headers = {
            Authorization: `Basic ${token}`,
        }

        try {
            const response = await axios.get(jobDetailsUrl, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            if (error.response) {
                throw new Error(
                    `API request failed with status ${error.response.status}: ${error.response.data}`,
                )
            } else if (error.request) {
                throw new Error(
                    'The request was made but no response was received',
                )
            } else {
                throw new Error(
                    'Error setting up the request: ' + error.message,
                )
            }
        }
    }
}

module.exports = Client
