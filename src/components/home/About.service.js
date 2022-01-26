import axios from 'axios'

const key = 'AIzaSyBAu7ZR-ZOVersEryoQcIUnfwg4PaFuD6Q'

const api = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
})

export const buscarYoutube = params => api.get('/search', {
    params: {
        key: key,
        part: 'snippet',
        maxResults: 5,
        q: params,
    },
})

// mock video
// import { videos } from './videos.mock'
// export const buscarYoutube = videos
