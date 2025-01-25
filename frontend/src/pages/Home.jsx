import React,{useState,useEffect} from 'react'
import {useAuthContext} from '../hooks/UseAuthContext';
// components
import WorkoutDetails from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

const Home = () => {
    const [workouts,setWorkouts] = useState(null);
    const {user} = useAuthContext();
    useEffect(()=>{
        const fetchWorkouts = async ()=>{
            const response = await fetch('http://localhost:4000/api/workouts',{
              headers:{
                'Authorization':`Bearer ${user.token}`
              }
            });
            const json = await response.json();
            if (response.ok){
                setWorkouts(json);
            }
        }
        if (user){
            fetchWorkouts();
        }
    },[workouts,user])
    
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((item)=>(
            <WorkoutDetails key={item._id} workout = {item}/>
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home
