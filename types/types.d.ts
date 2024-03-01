declare namespace _default {
    export { JobSearchParams };
    export { Job };
    export { JobSearchResponse };
}
export default _default;
export type JobSearchParams = {
    employerId: string;
    employerProfileId: string;
    keywords: string[];
    locationName: string;
    distanceFromLocation: number;
    permanent: boolean;
    contract: boolean;
    temp: boolean;
    partTime: boolean;
    fullTime: boolean;
    minimumSalary: number;
    maximumSalary: number;
    postedByRecruitmentAgency: boolean;
    postedByDirectEmployer: boolean;
    graduate: boolean;
    resultsToTake: number;
    resultsToSkip: number;
};
export type Job = {
    jobId: number;
    employerId: number;
    employerName: string;
    employerProfileId: number;
    employerProfileName: string;
    jobTitle: string;
    locationName: string;
    minimumSalary: number;
    maximumSalary: number;
    currency: string;
    expirationDate: string;
    date: string;
    jobDescription: string;
    applications: number;
    jobUrl: string;
};
export type JobSearchResponse = {
    results: Job[];
    totalResults: number;
};
