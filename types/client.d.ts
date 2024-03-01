export = Client;
declare class Client {
    /**
     * @param {string} apiKey - The API key to use for requests
     */
    constructor(apiKey: string);
    apiKey: string;
    /**
     * A generator function to fetch all jobs for given search params, and return an iterator
     * @param {import('./types').JobSearchParams} params - The parameters for the request
     * @returns {AsyncGenerator<import('./types').Job[]>} - A generator function to fetch jobs
     */
    getAllJobsIter(params: import('./types').JobSearchParams): AsyncGenerator<import('./types').Job[]>;
    /**
     * Create a new request to the Reed API for job searching
     * @param {import('./types.js').JobSearchParams} params
     * @returns {Promise<import('./types.js').JobSearchResponse>}
     */
    newJobSearch(params: import('./types.js').JobSearchParams): Promise<import('./types.js').JobSearchResponse>;
    /**
     * Get the details of a job by its id
     * @param {number} jobId - The id of the job to fetch
     * @returns {Promise<import('./types.js').Job>}
     */
    getJobDetails(jobId: number): Promise<import('./types.js').Job>;
}
