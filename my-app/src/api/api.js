import * as axios from 'axios'

const instance = axios.create ({
    withCredentials: true,
    baseURL:'https://social-network.samuraijs.com/api/1.0/',
    headers: {'API-KEY': '93f043c4-2000-44cd-a663-5407e6e82aaf'}
})


export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)},

    deleteFollow (id) {
            return instance.delete(`follow/${id}`, {})
            .then(response => response.data)},
    
    getFollow (id) {
            return instance.post(`follow/${id}`, {})
            .then(response => response.data)},
}


export const authAPI = {
    getAuthInfo () {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    }

}

export const profileAPI = {
    getUserProfile(userId) { 
        return instance.get(`profile/` + userId).then(response => response.data)},
    getStatus (userId) {
            return instance.get(`profile/status/` + userId);
        },
    updateStatus (status) {
        return instance.put(`profile/status`, {status:status});
    }    
}
