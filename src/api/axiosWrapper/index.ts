/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable no-console */

import axios from "axios";
// import isProd from 'utils/isProd';
const isProd = true;

function onSuccess(response: any) {
  return response.data;
}

function onError(error: any) {
  if (error.response && !isProd) {
    // request made, server resp. non 2XX code
    console.error("Status:", error.response.status);
    console.error("Data:", error.response.data);
    console.error("Headers:", error.response.headers);
  } else if (error.request) {
    // Request made, no resp. recieved
    console.error("No response:", error.request);
  } else {
    // Issue creating request
    console.error("Error:", error, error.message);
  }
  return Promise.reject(error.response || error.message);
}

export default {
  ...axios,
  get: (url: string, data: any): Promise<any> =>
    axios.get(url, data).then(onSuccess).catch(onError),
  post: (url: string, data: any): Promise<any> =>
    axios.post(url, data).then(onSuccess).catch(onError),
};
