// @ts-check
const Client = require('../src/client.js')

describe('Reed api client', () => {
    const apiKey = process.env.REED_API_KEY

    test('checks if REED_API_KEY is set', () => {
        if (!apiKey) {
            console.log('REED_API_KEY not set. Skipping API tests.')
        }
    })

    if (apiKey) {
        test('checks can iterate through all jobs', async () => {
            const testParams1 = {
                keywords: ['developer'],
                resultsToTake: 50,
            }
            let reed = new Client(apiKey)
            let jobs = []

            const jobIterator = reed.getAllJobsIter(testParams1)

            let iterationResult = await jobIterator.next()
            while (!iterationResult.done) {
                const joblist = iterationResult.value
                jobs.push(...joblist)
                iterationResult = await jobIterator.next()
            }

            let page1 = await reed.newJobSearch(testParams1)
            expect(jobs.length).toEqual(page1.totalResults)
        }, 30000)

        test('checks can handle invalid api key', async () => {
            let c = new Client('invalidApiKey')
            const testParams2 = {
                keywords: ['software engineer'],
                resultsToTake: 50,
            }

            c.newJobSearch(testParams2).catch((error) => {
                expect(error.message).toBeDefined()
                expect(error.message).toBe(
                    'API request failed with status 401: ',
                )
            })
        })

        test('checks we can get job details', async () => {
            const testParams3 = {
                keywords: ['developer'],
                resultsToTake: 1,
            }
            let reed = new Client(apiKey)
            let jobs = await reed.newJobSearch(testParams3)

            let iJob = jobs.results[0]
            await reed
                .getJobDetails(iJob.jobId)
                .catch((error) => {
                    console.log('Error getting job details: ', error)
                })
                .then((jobDetails) => {
                    expect(jobDetails).toBeDefined()
                    expect(jobDetails.jobId).toEqual(iJob.jobId)
                })
        })
    }
})
