/**
 * @typedef {Object} JobSearchParams
 * @property {string} employerId
 * @property {string} employerProfileId
 * @property {string[]} keywords
 * @property {string} locationName
 * @property {number} distanceFromLocation
 * @property {boolean} permanent
 * @property {boolean} contract
 * @property {boolean} temp
 * @property {boolean} partTime
 * @property {boolean} fullTime
 * @property {number} minimumSalary
 * @property {number} maximumSalary
 * @property {boolean} postedByRecruitmentAgency
 * @property {boolean} postedByDirectEmployer
 * @property {boolean} graduate
 * @property {number} resultsToTake
 * @property {number} resultsToSkip
 */

/**
 * @typedef {Object} Job
 * @property {number} jobId
 * @property {number} employerId
 * @property {string} employerName
 * @property {number} employerProfileId
 * @property {string} employerProfileName
 * @property {string} jobTitle
 * @property {string} locationName
 * @property {number} minimumSalary
 * @property {number} maximumSalary
 * @property {string} currency
 * @property {string} expirationDate
 * @property {string} date
 * @property {string} jobDescription
 * @property {number} applications
 * @property {string} jobUrl
 */

/**
 * @typedef {Object?} JobSearchParams
 * @property {string?} employerId - id of employer posting job
 * @property {string?} employerProfileId - profile id of employer posting job
 * @property {string[]?} keywords - any search keywords
 * @property {string?} locationName - the location of the job
 * @property {number?} distanceFromLocation - distance from location name in miles (default is 10)
 * @property {boolean?} permanent - true/false
 * @property {boolean?} contract - true/false
 * @property {boolean?} temp - true/false
 * @property {boolean?} partTime - true/false
 * @property {boolean?} fullTime - true/false
 * @property {number?} minimumSalary - lowest possible salary e.g. 20000
 * @property {number?} maximumSalary - highest possible salary e.g. 30000
 * @property {boolean?} postedByRecruitmentAgency - true/false
 * @property {boolean?} postedByDirectEmployer - true/false
 * @property {boolean?} graduate - true/false
 * @property {number?} resultsToTake - maximum number of results to return (defaults and is limited to 100 results)
 * @property {number?} resultsToSkip - number of results to skip (this can be used with resultsToTake for paging)
 */

/**
 * @typedef {Object} JobSearchResponse
 * @property {Job[]} results
 * @property {number} totalResults
 */

export default { JobSearchParams, Job, JobSearchResponse }
