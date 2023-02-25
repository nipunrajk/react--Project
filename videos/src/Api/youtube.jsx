import axios from 'axios'

const KEY = 'AIzaSyBpJ3nUOCo9JcJF5qQWlaLe_fSBhNCqfPg'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
})
