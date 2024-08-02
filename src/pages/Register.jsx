import { Form, useNavigate, useActionData } from "react-router-dom";
import { useEffect } from "react";

import nikeLogo from '../assets/nike-logo.svg';
export default function Login(){
  const navigate = useNavigate();
  const status = useActionData();
  const sessionAcccount = sessionStorage.getItem('account');
  useEffect(()=>{ if(sessionAcccount) navigate('/')}, []);
  return(
    <div className="h-screen pt-[50px]">
      <div className="bg-white flex items-center justify-start flex-col m-auto max-w-[700px]">
        <img src={nikeLogo} alt="nike-logo"  height={25} width={50} className="mb-[35px]"/>
        <p className="text-[30px] font-bold mb-[15px]">BE A NIKE MEMBER</p>
        <p className="text-gray-400 text-center mb-[15px]">Create your Nike Member profile and get first <br/> access to the very best of Nike products, <br/>inspiration  and community.</p>
        
        <Form method='POST' className="w-[80%] p-[10px]">
          <input type="text" placeholder='Email' name='email' required className="px-[12px] py-[12px] w-full border border-gray-200 rounded outline-none mb-[20px]"/>
          <input type="password" placeholder='Password' name='password' required className="px-[12px] py-[12px] w-full border border-gray-200 rounded outline-none mb-[20px]"/>
          <input type="password" placeholder='Confirm Password' name='confirmPassword' required className="px-[12px] py-[12px] w-full border border-gray-200 rounded outline-none mb-[20px]"/>
          <input type="text" placeholder='First Name' name='firstName' required className="px-[12px] py-[12px] w-full border border-gray-200 rounded outline-none mb-[20px]"/>
          <input type="text" placeholder='Last name' name='lastName' required className="px-[12px] py-[12px] w-full border border-gray-200 rounded outline-none"/>

          <div className="flex items-center justify-center my-[20px]">
            <button type='submit' className='bg-black text-white px-[25px] py-[10px] rounded hover:bg-opacity-75 mr-[20px]'> Create Account</button>
            <button onClick={()=>{navigate('/login')}} className='bg-black text-white px-[25px] py-[10px] rounded hover:bg-opacity-75'> Cancel</button>
          </div>
        </Form>
        {status?.message && <p className='text-red-500 mb-[20px]'> {status.message} </p>}
        <div className="flex items-center justify-center">
          <input type="checkbox" className="h-[15px] w-[15px] mr-[20px]"/>
          <p className='text-[15px] text-gray-400'> Sign up for emails to get updates from Nike on products, <br/>and your Member benefits.</p>
        </div>
        <p className='text-center text-gray-500'>By continuing, I agreeto Nike's <span className="underline text-gray-400 cursor-pointer">Privacy Policy</span> and <br/><span className="underline text-gray-400 cursor-pointer">Terms of Use</span></p>
      </div>
    </div>
  )
}