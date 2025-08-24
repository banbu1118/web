import axios from 'axios'

const axiosInstance = axios.create({  // axios 实例  
    //baseURL: "http://127.0.0.1:8008",
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000
})

const get = (url, data = {}) => {
    return axiosInstance.get(url, { params: data }).then(response => response.data)
}

const post = (url, data = null) => {
    return axiosInstance.post(url, data).then(response => response.data)
}

const postForm = (url, data = null) => {
    return axiosInstance.post(url, data, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(response => response.data)
}

const postFile = (url, data = null) => {
    return axiosInstance.post(url, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(response => response.data)
}

const postToken = (url, token, data = null) => {
    return axiosInstance.post(url, data, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.data)
}

export default { get, post, postForm, postFile, postToken }