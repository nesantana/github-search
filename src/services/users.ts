import { api } from './api'

const url = 'users/'

export const getUserByUsername = (name: string) => api.get(`${url}${name}`)

export const getReposByUsername = (name: string) => api.get(`${url}${name}/repos`)
