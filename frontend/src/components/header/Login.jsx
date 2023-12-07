import React, { useContext } from 'react'
import { MyContext } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import "./ContactUs.css"

export default function Login() {
    const {setUser} =useContext(MyContext)
    const navigate = useNavigate()
    const loginUser=(e)=>{
        e.preventDefault()
        //POST reuqest
        fetch("http://localhost:5500/users/login", {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email: e.target.email.value, password :e.target.password.value })
        })
        .then(res=>{ 
        const token = res.headers.get("token")
        if(token){
           
            localStorage.setItem("token",token) 
        }
        return res.json()  
        })
        .then(result=>{
           if(result.success){
            // setUser(result.data) // 2s
             navigate("/") // 1s
            }else{
            console.log(result.message)
           }
        })
        .catch(err=>console.log(err))
    }
  return (
    <div className="loginBackground">
        <div className="contact-form">Login Page
        <form onSubmit={loginUser}>
        <label htmlFor="email">Email :</label>
        <input type="email" id='email' name="email" /> <br />

        <label htmlFor="password">Password : </label>
        <input type="password" id='password' name="password" /> <br />

        <button>Login</button>
    </form>
    </div>
    </div>
  )
}
