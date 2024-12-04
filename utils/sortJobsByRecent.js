// utils/sortJobs.js

/**
 * Sorts an array of jobs by the most recent job posting date.
 * @param {Array} jobs - The array of job objects to be sorted.
 * @returns {Array} - The sorted array of jobs.
 */
export const sortJobsByRecent = (jobs) => {
    if (jobs) {
      return jobs.sort((a, b) => b.job_posted_at_timestamp - a.job_posted_at_timestamp);
    }
    return [];
  };
  