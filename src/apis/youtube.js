import axios from 'axios'

const KEY = 'AIzaSyBWv_U6vfEdx02ZzZguTtECzP5A4rv6LWI'

export const axiosInstance = () => {
    return axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            maxResults: 5,
            key: KEY
        }
    })
}

const search = (text) => {
    return axiosInstance().get('/search', {
        params: {
            q: text
        }
    })
}

export default search