import utils from '../src/utils'

// @ts-check
describe('Utility functions', () => {
    test('checks can parse job parameters', () => {
        const params = {
            keywords: 'developer',
            resultsToTake: 50,
        }
        const fakeUrl = 'https://fakeurl.com'

        const url = utils.constructUrlWithQueryParams(fakeUrl, params)

        expect(url).toEqual(
            'https://fakeurl.com?keywords=developer&resultsToTake=50',
        )
    })

    test('checks can handle no params', () => {
        const fakeUrl = 'https://fakeurl.com'

        const url = utils.constructUrlWithQueryParams(fakeUrl, {})

        expect(url).toEqual('https://fakeurl.com')
    })

    test('checks can handle multiple keywords', () => {
        const params = {
            keywords: ['developer', 'javascript'],
            resultsToTake: 50,
        }
        const fakeUrl = 'https://fakeurl.com'

        const url = utils.constructUrlWithQueryParams(fakeUrl, params)

        expect(url).toEqual(
            'https://fakeurl.com?keywords=developer%2Cjavascript&resultsToTake=50',
        )
    })
})
