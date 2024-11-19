import React from 'react'
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='h-screen bg-gradient-to-r from-[#080C14] via-[#1c354e] to-[#080C14] flex items-center justify-center'>

            <div className=' w-[27%] p-5 bg-[#080C14] rounded-md bg-opacity-20 shadow-3xl shadow-[0_0_20px_rgb(8,12,20)]'>
                
                <h1 className='text-3xl font-bold text-white mb-5'>Sign In</h1>
                <form className='flex flex-col gap-6 h-full'>
                    <div className='flex flex-col'>
                        <label className='text-[#94A0A9] mb-2' htmlFor="fullname">Username</label>
                        <input
                            type="text"
                            id="fullname"
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
                        <label className='text-[#94A0A9] mb-2' htmlFor="fullname">Password</label>
                        <input
                            type="password"
                            id="password"
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

                    <button type='submit' className='bg-white rounded-md p-2 mt-8'>Sign In</button>
                    <h1 className='w-full text-center text-white'>Don't have an account? <Link to="/api/auth/signup">Sign Up</Link></h1>
                </form>

                
            </div>
        </div>
    )
}

export default Login