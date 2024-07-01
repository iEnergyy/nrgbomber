export const options = {
    stages: [
      { duration: '10s', target: 1 }, // Ramp-up to 1 user
    ],
    thresholds: {
      http_req_duration: ['p(95)<200'], // 95% of requests must complete below 200ms
    },
  };
  