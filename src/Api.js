import axios from 'axios'

export async function getApi(){
  try{
    const response = await axios({
      url: `http://challenge-react.alkemy.org/`,
      method: 'POST',
      data:{
        email: 'challenge@alkemy.org',
        password: 'react'
      }
    })
    const token = response.data.token
    window.localStorage.setItem("token", token)
    return console.log(token)
  }
    catch(e){
      alert(e)
    }
  }

