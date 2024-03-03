# ReedUK Jobs API SDK for JavaScript

This SDK provides a simple and efficient way to interact with the ReedUK Jobs API using JavaScript. It enables developers to search for jobs, fetch job details, and paginate through job listings with ease.

## Features

- Easy to set up and use with minimal configuration.
- Typed parameters, for knowledge of what you can query.
- Fetch job listings based on various search parameters.
- Paginate through job results with a generator function for better user custom control.
- Fetch detailed information about specific jobs by ID.
- Built-in error handling for robust application development.

## Installation

You can install the SDK using npm:

```bash
npm install reeduk-sdk-js
```

## Usage

First, import the Client class from the SDK:

```javascript
const Client = require('reeduk-sdk-js').Client;
```

## Initializing the Client
To use the SDK, you first need to create an instance of the Client class with your API key:

```javascript
const client = new Client('your_api_key_here');
```

You can get an API key from https://www.reed.co.uk/developers/jobseeker

## Searching for Jobs
To search for jobs, use the newJobSearch method with the desired search parameters:
```javascript
const searchParams = {
  keywords: 'javascript developer',
  locationName: 'London',
  resultsToTake: 10, // Optional: Defaults to 100
};

client.newJobSearch(searchParams).then(response => {
  console.log(response.results);
}).catch(error => {
  console.error(error.message);
});
```

## Paginating Through Job Results
For paginating through job results, you can use the getAllJobsIter generator function:

```javascript
async function fetchAllJobs() {
  for await (const jobBatch of client.getAllJobsIter({ keywords: 'developer' })) {
    console.log(jobBatch);
  }
}

fetchAllJobs().catch(console.error);
```

## Fetching Job Details
To get the details of a specific job by its ID, use the getJobDetails method:

```javascript
client.getJobDetails(jobId).then(job => {
  console.log(job);
}).catch(error => {
  console.error(error.message);
});
```

## Error Handling

The SDK throws errors for failed API requests, providing detailed messages to help diagnose issues. It's recommended to use try-catch blocks or handle promise rejections when calling SDK methods.

## Contributing

Contributions are welcome! Please submit a pull request or create an issue for any features or improvements.
