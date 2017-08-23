import axios from 'axios';

export function getShelves(id) {
    return axios.get('/api/shelf/' + id).then(res => res.data)
}

export function getBin(id) {
    return axios.get('/api/bin/' + id).then(res => res.data)
}

export function editBin(id, obj) {
    return axios.put('/api/bin/' + id, obj).then(res => console.log(res.data))
}

export function deleteBin(id) {
    return axios.delete('/api/bin/' + id).then(res => res.data)
}

export function createBin(id, obj) {
    return axios.post('/api/bin/' + id, obj)
}