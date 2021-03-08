
import axios from "axios";

const apikey = 'AIzaSyDlxDi5IFFDdnkwKVG-RBpS4XS2Vih5guA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part:'snippet',
        maxResults: 5,
        key: apikey

    }

});