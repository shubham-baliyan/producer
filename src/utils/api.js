import axios from "axios";

const apiInstance = axios.create({
  baseURL:
    "https://pkc-l6wr6.europe-west2.gcp.confluent.cloud:443/kafka/v3/clusters/lkc-o2kqky/",
});

apiInstance.interceptors.request.use(async (config) => {
  const token = `T1pQNTJQTkVQNUVCTkRVSDpmVlZoWnh4d1h2a0hYTU5DTXJOV3BzUjRYd2pla281YlA4WkpHSHVGTSsvTFN4WnlDVnN2c2lSSmNKT3NWZGQy`;
  config.headers.Authorization = `Basic ${token}`;
  return config;
});

export default function Api(method, url, payload = "") {
  return new Promise((res, rej) => {
    let clientConfig = {
      method,
      url,
      responseType: "json",
      data: payload,
    };

    apiInstance
      .request({
        ...clientConfig,
      })
      .then((response) => {
        return res(response.data);
      })
      .catch((err) => {
        console.log(err);
        return rej(err);
      });
  });
}
