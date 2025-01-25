import React,{useState} from 'react'
import {UseSignup} from "../hooks/UseSignup";
const Signup = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {signup,error,isLoading} = UseSignup();
    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        await signup(email,password);
    }
  return (
    <form 
        onSubmit={handleSubmit}
        className="signup"
    >
        <h3>Sign up</h3>
        <label>Email:</label>
        <input
         type="email"
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
        />
         <label>Password:</label>
        <input 
            type="password"
            onChange={(e)=>setPassword(e.target.value)}
         />
        <button disabled={isLoading}>Submit</button>
        {error && <div className='error'>{error}</div>}

    </form>
  )
}

export default Signup
