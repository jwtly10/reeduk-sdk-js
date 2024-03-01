// @ts-check
import Client from '../src/client.js'

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
                    'Request failed with status code 401',
                )
            })
        })
    }
})
