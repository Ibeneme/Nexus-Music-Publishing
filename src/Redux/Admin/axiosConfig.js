import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/nexus-news`
});

export default axiosInstance;
