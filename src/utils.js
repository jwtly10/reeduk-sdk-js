/**
 * Constructs a URL with query parameters from an object.
 * @param {string} baseUrl The base URL to which the query parameters will be appended.
 * @param {import('./types').JobSearchParams} params An object containing the query parameters.
 * @returns {string} The full URL with query parameters.
 */
function constructUrlWithQueryParams(baseUrl, params) {
    const filteredParams = Object.entries(params).filter(
        ([_, value]) => value !== undefined && value !== null,
    )

    const queryStrings = filteredParams.map(
        ([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )

    const queryString =
        queryStrings.length > 0 ? `?${queryStrings.join('&')}` : ''

    return `${baseUrl}${queryString}`
}

export default { constructUrlWithQueryParams }
