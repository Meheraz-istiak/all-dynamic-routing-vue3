// api.js

import axios from 'axios';

export async function fetchDynamicRoutes() {
  try {
    const response = [
        {
          "path": "/about",
          "name": "about",
          "component": "about"
        },
        {
          "path": "/contact",
          "name": "contact",
          "component": "contact"
        },
        {
            "path": "/email",
            "name": "email",
            "component": "email"
          },
        // ...
      ];
    //  console.log(response[0])
    // Replace with your API endpoint
    return response
  } catch (error) {
    console.error('Error fetching dynamic routes:', error);
    return [];
  }
}

