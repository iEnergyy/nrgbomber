export const options = {
    stages: [
      { duration: '2m', target: 10 }, // Ramp-up to 10 users over 2 minutes
      { duration: '4m', target: 10 }, // Stay at 10 users for ~4 hours
      { duration: '2m', target: 0 }, // Ramp-down to 0 users over 2 minutes
    ],
    thresholds: {
      http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    },
  };
  