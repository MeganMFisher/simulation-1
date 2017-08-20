import axios from 'axios';

export function getShelves(id) {
    return axios.get('/api/shelf/' + id).then(res => res.data)
}