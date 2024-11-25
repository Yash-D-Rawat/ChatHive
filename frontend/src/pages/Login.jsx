import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [details, setdetails] = useState({
        username: '',
        password: ''
    })

    function handleChange(e) {
        const { name, value } = e.target;
        setdetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    }

    const handleSubmit = async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const {username, password} = details
            const {data} = await axios.post("http://localhost:8000/api/auth/login", {  username, password }, config)
            console.log("login successful:", data);
            localStorage.setItem("userInfo", JSON.stringify(data))
            setdetails({
                username:'',
                password:''
            })
            navigate("/chats");
        } catch (error) {
            console.log("Login error", error);
        }
    }

    return (
        <div className='h-screen bg-gradient-to-r from-[#080C14] via-[#1c354e] to-[#080C14] flex items-center justify-center'>

            <div className=' w-[27%] p-5 bg-[#080C14] rounded-md bg-opacity-20 shadow-3xl shadow-[0_0_20px_rgb(8,12,20)]'>

                <h1 className='text-3xl font-bold text-white mb-5'>Sign In</h1>
                <form className='flex flex-col gap-6 h-full'>
                    <div className='flex flex-col'>
                        <label className='text-[#94A0A9] mb-2'>Username</label>
                        <input
                            required
                            type="text"
                            id="fullname"
                            name='username'
                            value={details.username}
                            onChange={handleChange}
                            placeholder='Yash Rawat'
                            className='
                            bg-[#080C14] 
                            rounded-lg 
                            border 
                            border-transparent 
                            hover:border-white 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-[#4876EE] 
                            text-white 
                            p-2
                            '
                        />
                    </div>

                    <div className='flex flex-col'>
                        <label className='text-[#94A0A9] mb-2'>Password</label>
                        <input
                            required
                            type="password"
                            id="password"
                            name='password'
                            value={details.password}
                            onChange={handleChange}
                            placeholder='******'
                            className='
                            bg-[#080C14] 
                            rounded-lg 
                            border 
                            border-transparent 
                            hover:border-white 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-[#4876EE] 
                            text-white 
                            p-2
                            '
                        />
                    </div>

                    <button type='button' onClick={handleSubmit} className='bg-white rounded-md p-2 mt-8'>Sign In</button>
                    <h1 className='w-full text-center text-white'>Don't have an account? <Link to="/api/auth/signup">Sign Up</Link></h1>
                </form>


            </div>
        </div>
    )
}

export default Login