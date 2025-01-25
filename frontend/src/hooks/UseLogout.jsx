import { useAuthContext } from "./UseAuthContext";
export const UseLogout = () => {
    const { dispatch } = useAuthContext();
    const logout = async()=>{
        localStorage.removeItem('user');

        // dispatch the logout action
        dispatch({type:'LOGOUT'});

    }
    return {logout};
}
