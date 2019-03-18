import axios from 'axios';

const KEY = 'AIzaSyAo8QoJmroBJkkJaANT6nHuB0n_PkiH9kU';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key:KEY
    }
});