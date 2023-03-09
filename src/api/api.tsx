import axios from "axios";
import {DataFromFormDataType} from "components/Profile/MyPosts/ProfileInfo/ProfileDataForm/ProfileDataForm";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "19e10eb8-2dc0-4d81-9c3d-8b0abd71eea1"
    }
});

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    unfollowUser(id: number){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUser(id: number){
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    getProfile(userId: string) {
        return profileAPI.getProfile(userId)
    },
}

export const authAPI = {
    setAuth() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post('auth/login', {email, password, rememberMe})
            .then(res => res.data)
    },
    logout() {
        return instance.delete('/auth/login')
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance.get(`profile/${userId}`)
            .then(response => response.data)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put('profile/photo', formData,  {
            headers: {
            "Content-Type": "multipart/form-data"
        }
        })
    },
    saveProfile(formData: DataFromFormDataType) {
        return instance.put('profile', formData)
          .then(res => res.data)
    }
}




