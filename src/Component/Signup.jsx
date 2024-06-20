// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Signup() {
//     const [showPass, setShowPass] = useState(false)
//     const [userdata, setUserData] = useState({
//         email: '',
//         password: ''
//     })
//     const navigate = useNavigate()
//     const handleChange=(e)=>{
//           // console.log( e.target.name + " = " + e.target.value);
//         // console.log('value = ', e.target.value);
//         const name= e.target.name
//         const value = e.target.value
//         setUserData({...userdata,[name]:value})
//     }
//    const handleSubmit=()=>{
//        const {email,password}=userdata
//        if (email==="Ashvita@123" && password==="123") {
//            navigate("/main")
//        }
//    }

//     return (
       
//             <div className='flex items-center justify-center'>

//                 <div className='flex items-center flex-col justify-center gap-3 h-[24rem] w-[29rem]  p-10 box mt-16 '>
//                     <div className='flex flex-col w-[23rem] gap-2'>
//                         <label className="input input-bordered flex items-center gap-4">
//                             Email
//                             <input type="email" className="grow" placeholder="Enter mail" name='email' onChange={handleChange} />
//                         </label>
//                         <label className="input input-bordered flex items-center gap-4">
//                             Password
//                             <input type={showPass ? "text" : "password"} className="grow" placeholder="enter the password" name='password' onChange={handleChange} />
//                             <svg xmlns="http://www.w3.org/2000/svg" onClick={() => { setShowPass(!showPass) }} viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
//                         </label>
//                         <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md" onClick={handleSubmit}>Sign In</button>
//                     </div>
//                     {/* <Link to='/signup'><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md" >Sign up</button></Link> */}
//                 </div>
//             </div>

        
//     )
// }
