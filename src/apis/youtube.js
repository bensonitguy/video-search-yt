import axios from 'axios';

const KEY = 'AIzaSyDaH_406IB_s8Xeo0aAyLGEh-fwonFN2DY';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:KEY
    }
});