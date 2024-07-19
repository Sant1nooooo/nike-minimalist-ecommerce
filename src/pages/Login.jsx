import { Form, useNavigate, useActionData } from "react-router-dom";
import { useEffect } from "react";
export default function Login(){
  const navigate = useNavigate();
  const status = useActionData();
  const sessionAcccount = sessionStorage.getItem('account');
  useEffect(()=>{ if(sessionAcccount) navigate('/')}, []);
  return(
    <div className="h-screen pt-[50px]">
      <div className="bg-white flex items-center justify-start flex-col m-auto max-w-[700px]">
        <img src="./src/assets/nike-logo.svg" alt="nike-logo"  height={25} width={50} className="mb-[35px]"/>
        <p className="text-[30px] font-bold mb-[15px]">BE FIRST TO KNOW</p>
        <p className="text-gray-400 text-center mb-[15px]">Sign Up  for Nike emails to be first to see <br/>the inspiring content, news and exclusive offers.</p>
        
        <Form method='POST' className="w-[80%] p-[10px]">
          <label htmlFor="email">
            <p className='font-semibold mb-[5px]'>Email address*</p>
            <input type="text" placeholder='Email*' name='email' required  className="px-[12px] py-[12px] w-full border border-gray-200 rounded outline-none mb-[20px]"/>
          </label>
          <label htmlFor="password">
            <p className='font-semibold mb-[5px]'>Password</p>
            <input type="password" placeholder='Password*' name='password' required className="px-[12px] py-[12px] w-full border border-gray-200 rounded outline-none"/>
          </label>
          <div className="flex items-center justify-center my-[20px] w-full">
            <button type='submit' className='bg-black text-white px-[25px] py-[10px] rounded hover:bg-opacity-75 mr-[20px]'> Login</button>
            <button onClick={()=>{navigate('/signUp')}} className='bg-black text-white px-[25px] py-[10px] rounded hover:bg-opacity-75'> Sign Up</button>
          </div>
        </Form>
        {status?.message && <p className='text-red-500 mb-[20px]'> {status.message} </p>}
        <p className='text-center text-gray-500'>By continuing, I agree to Nike's <span className="underline text-gray-400 cursor-pointer">Privacy Policy</span> and <br/><span className="underline text-gray-400 cursor-pointer">Terms of Use</span></p>
      </div>
    </div>
  )
}