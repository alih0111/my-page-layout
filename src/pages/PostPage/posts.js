import {get} from '../../services/http'

export function loadPost(id){
    return get(`http://localhost:5000/posts/${id}`)    
}