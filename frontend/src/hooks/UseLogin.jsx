import React,{useState} from 'react'
import {UseAuthContext} from './UseAuthContext'

export const useLogin = () => {
    const [error,setError] =useState(null);
    const [isLoading,setIsLoading] = useState(false); // initialize to false
    const {dispatch} = UseAuthContext(); // fixed typo here

    const login = async(email,password)=>{
        setIsLoading(true);
        setError(null);

        const response = await fetch('http://localhost:4000/api/user/login',{
            method:'POST',
            headers:{'Content-Type':"application/json"},
            body: JSON.stringify({email,password})
        })
        const json = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            // save the user to the local storage
            localStorage.setItem('user',JSON.stringify(json))

            //  update the authContext
            dispatch({type:'LOGIN',payload:json})
            
            setIsLoading(false);
        }
    }
    return {login,isLoading,error};
}

