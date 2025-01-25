import React, { useState } from 'react'
import {useAuthContext} from '../hooks/UseAuthContext';
const WorkoutForm = () => {
    const [title,setTitle] = useState("");
    const [load,setLoad] = useState('');
    const [reps,setReps] = useState('');
    const [error,setError] = useState(null);
    const {user} = useAuthContext();;
    const handleSubmit = async(e)=>{
    
        e.preventDefault();
        if (!user){
            setError('You must be logged in to add a workout.');
            return
        }
        const workout = {title,load,reps}
        const response = await fetch('http://localhost:4000/api/workouts',{
            method:"POST",
            body: JSON.stringify(workout),
            headers:{
                'Content-Type':"application/json",
                'Authorization':`Bearer ${user.token}`
            }
        }
    )
    const json = await response.json();

    if(!response.ok){
        setError(json.error);
    }
    if(response.ok){
        setError(null);
        setTitle('');
        setLoad('');
        setReps('');
    }
}
  return (
    <form className='create' onSubmit={handleSubmit}>
        <h3>Add a New Workout</h3>

        <label>Title:</label>
        <input 
            type="text"
            onChange={e=>setTitle(e.target.value)}
            value={title}
         />
        <label>Load:</label>
        <input 
            type="Number"
            onChange={e=>setLoad(e.target.value)}
            value={load}
         />
        <label>Reps:</label>
        <input 
            type="Number"
            onChange={e=>setReps(e.target.value)}
            value={reps}
         />
         <button>Add Workout</button>
         { error && <div className='error'>{error}</div>}
    </form>
  )
}

export default WorkoutForm;
