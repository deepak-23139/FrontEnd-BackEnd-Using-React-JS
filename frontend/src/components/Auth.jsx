import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_BASE_URL = "http://localhost:3000/api/auth";

const Auth = () => {
    const navigate = useNavigate();

    const [isRegister, setIsRegister] = useState(true);

    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const handleRegisterChange = (e) => {
        setRegisterForm({...registerForm, [e.target.name]: e.target.value})
    }

    const handleLoginChange = (e) => {
        setLoginForm({...loginForm, [e.target.name]: e.target.value})
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        console.log(registerForm);
        try{
            const res = await axios.post(`${API_BASE_URL}/register`, registerForm);

            alert(res.data.message);
            setIsRegister(false);

        }catch(err){
            alert(err.response?.data?.message || "Registration Failed");
        }

    }

    const handleLogin = async(e) => {
        e.preventDefault();
        try{
            const res = await axios.post(`${API_BASE_URL}/login`, loginForm);

            alert(res.data.message);
            
            localStorage.setItem("token", res.data.token);
            navigate("/dashboard");

        }catch(err){
            alert(err.response?.data?.message || "Login Failed");
        }
    }

    const inputStyle = "w-full p-3 mb-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-150 ease-in-out";

    const buttonStyle = 'w-full py-3 bg-indigo-600 text-white font-semibold rounded-2xl hover:bg-indigo-700 transition duration-150 ease-in-out shadow-md';

  return (
    <div className=' min-h-screen flex justify-center items-center bg-gray-100'>
        <div className=' bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md'>
            {/* Toggle Button */}
            <div className=' flex justify-center mb-6'>
                <button className={ `px-4 py-2 font-semibold rounded-l-lg ${isRegister ? ' bg-indigo-600 text-white' : ' bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={()=> setIsRegister(true)}>Register</button>


                <button  className={ `px-4 py-2 font-semibold rounded-r-lg ${!isRegister ? ' bg-indigo-600 text-white' : ' bg-gray-200 text-gray-700 hover:bg-gray-300'}`} onClick={()=> setIsRegister(false)}>Login</button>
            </div>

            {/* Dynamic Forms */}
{
    isRegister ? (
            <form onSubmit={handleRegister}>
                <input className={inputStyle} name="name" placeholder='Name' value={registerForm.name} onChange={handleRegisterChange}/>
                <input className={inputStyle} name="email" type='email' placeholder='Email' value={registerForm.email} onChange={handleRegisterChange}/>
                <input className={inputStyle} name="password" type="password" placeholder='Password' value={registerForm.password} onChange={handleRegisterChange}/>

                <button className={buttonStyle} type='submit' >Register</button>
            </form>
    ) : (
            <form onSubmit={handleLogin}>
                <input className={inputStyle} name="email" type='email' placeholder='Email' value={loginForm.email} onChange={handleLoginChange}/>
                <input className={inputStyle} name="password" type="password" placeholder='Password' value={loginForm.password} onChange={handleLoginChange}/>

                <button className={buttonStyle} type='submit'>Login</button>
            </form>
    )
}
        </div>
    </div>
  )
}

export default Auth