import * as axios from "axios"

const instanse = axios.create({
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    withCredentials:true,
    headers: {"API-KEY":"b43b1cc4-c02d-4d3c-b7a0-bc2b692f6645"}
})

export const userAPI={
    getUsers :(currentPage=1,pageSize=100)=>{
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`,{
            withCredentials:true
          }).then(response =>{
            return response.data;
          })
    } ,
    unfollow(userId){
     return instanse.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    follow(userId){
    return  instanse.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
}

