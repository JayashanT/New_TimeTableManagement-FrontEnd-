import axios from 'axios'

export const register = (newUser,onSuccess) => {
  console.log(newUser)
  return axios
    .post('https://localhost:44396/api/user',newUser)
    .then(response => {
      // console.log('Registered')
      
      
      onSuccess();
    }).catch(err=>{
      console.log(err)
      console.log("eeeeee")
    })
}

export const login = (user,onSuccess,onFail) => {
  return axios
    .post('https://localhost:44396/api/user/Login', {
      Staff_Id: user.Staff_Id,
      password: user.password
    })
    .then(response => {
      // console.log("aaa")
   
      // console.log("BB")
      localStorage.setItem('usertoken', response.data.token)
     
      if(response.status==200){
        onSuccess();
      }
      return response.data.token
    })
    .catch(err => {
      onFail();
      console.log(err)
    })
}

// export const getProfile = user => {
//   return axios
//     .get('users/profile', {
//       //headers: { Authorization: ` ${this.getToken()}` }
//     })
//     .then(response => {
//       console.log(response)
//       return response.data.state
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }