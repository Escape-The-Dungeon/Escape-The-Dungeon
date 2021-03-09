import axios from "axios";

const apikey = process.env.REACT_APP_API_KEY;

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part:'snippet',
        maxResults: 5,
        key: apikey
    }
});