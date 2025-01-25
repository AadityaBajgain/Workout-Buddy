import React,{createContext,useReducer} from 'react';

const WorkoutContext = createContext();

const WorkoutContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(workoutReducer,{
        workouts:null
    } );

    return(
       <WorkoutContext.Provider>
            {children}
       </WorkoutContext.Provider>
    )
}
export default WorkoutContextProvider;