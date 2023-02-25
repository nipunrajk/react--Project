import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID EshwBdacSZgK-QuGcoylj299jjg_YRWGbbKyBA2lXH4',
  },
})
