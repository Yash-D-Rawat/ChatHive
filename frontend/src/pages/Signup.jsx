import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// bg-gradient-to-r from-[#080C14] via-[#122232] to-[#080C14]
function Signup() {
    const navigate = useNavigate();
    const [userDetails, setuserDetails] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmpassword: '',
        gender: ''
    })

    const handleSubmit = async () => {
        try {
            if (userDetails.password !== userDetails.confirmpassword) {
                console.log("not same ppass")
                return;
            }
            const config = {
                headers: {
                    "Content-type": "application/json"
                }
            }
            const { fullname, username, password, confirmpassword, gender } = userDetails;
            const { data } = await axios.post("http://localhost:8000/api/auth/signup", { fullname, username, password, confirmpassword, gender }, config)
            console.log("Signup successful:", data);
            localStorage.setItem("userInfo", JSON.stringify(data))
            setuserDetails({
                fullname: '',
                username: '',
                password: '',
                confirmpassword: '',
                gender: ''
            });
            console.log(data)
            navigate("/chats");
        } catch (error) {
            console.log("Signup error:", error)
        }
    }


    function handleChange(e) {
        const { name, value } = e.target;
        setuserDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    }

    return (
        <div className='h-screen bg-gradient-to-r from-[#080C14] via-[#1c354e] to-[#080C14] flex items-center justify-center'>

            <div className='w-[85%] md:w-[27%] p-5 bg-[#080C14] rounded-md bg-opacity-20 shadow-3xl shadow-[0_0_20px_rgb(8,12,20)]'>

                <h1 className='text-3xl font-bold text-white mb-5'>Sign Up</h1>
                <form className='flex flex-col gap-4 h-full'>
                    <div className='flex flex-col'>
                        <label className='text-[#94A0A9] mb-1'>Full Name</label>
                        <input
                            type="text"
                            name="fullname"
                            value={userDetails.fullname}
                            onChange={handleChange}
                            required
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
                        <label className='text-[#94A0A9] mb-1'>Username</label>
                        <input
                            type="text"
                            name="username"
                            value={userDetails.username}
                            onChange={handleChange}
                            required
                            placeholder='YR7'
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
                        <label className='text-[#94A0A9] mb-1'>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={userDetails.password}
                            onChange={handleChange}
                            required
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

                    <div className='flex flex-col'>
                        <label className='text-[#94A0A9] mb-1'>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmpassword"
                            value={userDetails.confirmpassword}
                            onChange={handleChange}
                            required
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

                    <div>
                        <label className="text-[#94A0A9] mb-1 block text-lg font-semibold">Gender</label>
                        <select
                            className="w-full p-3 text-white bg-[#1c354e] rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-[#4876EE] hover:bg-[#122232]"
                            name='gender'
                            value={userDetails.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button type='button' onClick={handleSubmit} className='bg-white rounded-md p-2 mt-5'>Sign Up</button>
                    <h1 className='w-full text-center text-white'>Already have an account? <Link to="/api/auth/login">Sign In</Link></h1>
                </form>


            </div>
        </div>
    )
}

export default Signup