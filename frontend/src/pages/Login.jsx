import React,{useState} from 'react'
import { useLogin } from '../hooks/UseLogin';
const Login = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const {login,isLoading,error} = useLogin();

    const handleSubmit = async(e)=>{
        e.preventDefault()
        await login(email,password);

    }
  return (
    <form 
        onSubmit={handleSubmit}
        className="Login"
    >
        <h3>Login</h3>
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
        <button disabled={isLoading}>Login</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Login
