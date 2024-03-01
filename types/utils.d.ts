/**
 * Constructs a URL with query parameters from an object.
 * @param {string} baseUrl The base URL to which the query parameters will be appended.
 * @param {import('./types').JobSearchParams} params An object containing the query parameters.
 * @returns {string} The full URL with query parameters.
 */
export function constructUrlWithQueryParams(baseUrl: string, params: import('./types').JobSearchParams): string;
