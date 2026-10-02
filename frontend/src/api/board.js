import axios from 'axios'

const BASE_URL = '/api/boards'

export const getBoards = () => {
  return axios.get(BASE_URL)
}

export const getBoard = (id) => {
  return axios.get(`${BASE_URL}/${id}`)
}

export const createBoard = (data) => {
  return axios.post(BASE_URL, data)
}
