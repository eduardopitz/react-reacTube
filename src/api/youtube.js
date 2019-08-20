import axios from 'axios';

const KEY = 'AIzaSyAyi1aNz2oSVduVh95LKMLTosTmNM8Kqek';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResulst: 5,
        key: KEY
    }
});

