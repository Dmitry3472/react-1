import * as axios from "axios";



const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "3142c0ad-805e-42d3-b4f2-9ec9c96f4d8f",
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pagesCount = 10) {

    return instance.get(`users?page=${currentPage}&count=${pagesCount}`,

    ).then(response => response.data)
  }
}
