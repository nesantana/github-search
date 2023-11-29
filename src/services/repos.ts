import { api } from './api'

const url = 'repos/'

export const getRepoByFullname = (fullname: string) => api.get(`${url}${fullname}`)
