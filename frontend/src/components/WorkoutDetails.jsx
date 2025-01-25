import React from 'react'
import {useAuthContext} from '../hooks/UseAuthContext';
const WorkoutDetails = ({workout}) => {
  
  return (

    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Load (kg): </strong>{workout.load}</p>
        <p><strong>Reps: </strong>{workout.reps}</p>
        <p><strong>Created At: </strong>{workout.createdAt}</p>
        <div>
        
    </div>
    </div>
  )
}

export default WorkoutDetails;
