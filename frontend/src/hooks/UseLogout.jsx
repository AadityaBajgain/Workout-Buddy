import { UseAuthContext } from "./UseAuthContext";
export const UseLogout = () => {
    const { dispatch } = UseAuthContext();
    const logout = async()=>{
        localStorage.removeItem('user');

        // dispatch the logout action
        dispatch({type:'LOGOUT'});

    }
    return {logout};
}
