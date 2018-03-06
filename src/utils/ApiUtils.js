import axios from 'axios';

// REST API root URL
const host = 'http://localhost:8000/api';

// API endpoints
const endpoints = {
    totalTweets: { get: () => `${host}/total-tweets/` },
    tweetsByLocation: { get: () => `${host}/tweets-today/` }
};

// GET request function builder
const fetch = endpoint => endPointParams =>
    new Promise((resolve, reject) => {
        axios.get(endpoint.get(endPointParams))
            .then(response => {
                resolve(response.data);
            })
            .catch(reject);
    });

export default {
    fetchTotalTweets: fetch(endpoints.totalTweets),
    fetchTweetsByLocation: fetch(endpoints.tweetsByLocation)
};