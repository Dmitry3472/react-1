import * as axios from "axios";
import { follow } from "../redux/users-reducer";



const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": "a23e1fad-84d1-459a-87e3-5890324243d3",
  }
})

export const usersAPI = {
  getUsers(currentPage = 1, pagesCount = 10) {

    return instance.get(`users?page=${currentPage}&count=${pagesCount}`,

    ).then(response => response.data)
  }
  follow(userId) {
    return instance
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      )

  },
  unfollow(userId) {
    return instance
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${userId}`
      )
  }
}
