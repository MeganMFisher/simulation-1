import axios from 'axios';

export function getShelves(id) {
    return axios.get('/api/shelf/' + id).then(res => res.data)
}

export function getBin(id) {
    return axios.get('/api/bin/' + id).then(res => res.data)
}

export function editBin(id, obj) {
    console.log(id)
    console.log(obj)
    return axios.put('/api/bin/' + id, obj).then(res => res.data)
}