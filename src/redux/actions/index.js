import axios from 'axios';
// import {USER_DETAIL, POST_DETAIL} from './actionType'
const URL = 'https://jsonplaceholder.typicode.com';



export function userDetails() {
  const request = axios.get(`${URL}/users`)
                  .then(res => res.data)
                  .catch((error)=>{
                    alert("There is an error in API call.");
                    });
  return {
    type:'USER_DETAIL.USER',
    payload:request
  }
}


export function postDetails(id) {
  const request = axios.get(`${URL}/users/${id}/posts`)
                  .then(res => res.data)
                  .catch((error)=>{
                    alert("There is an error in API call.");
                    });
  return {
    type:'POST_DETAIL.POST',
    payload:request
  }
}

//${URL}/posts/${id}/comments

export function commentDetails(id) {
  const request = axios.get(`${URL}/posts/${id}/comments`)
                  .then(res => res.data)
                  .catch((error)=>{
                    alert("There is an error in API call.");
                    });
  return {
    type:'COMMENT_DETAIL.COMMENT',
    payload:request
  }
}