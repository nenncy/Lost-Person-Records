import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext} from "./MainComponent";


const Logout = () => {

    const { state, dispatch } = useContext(UserContext);
  
   
    const history = useHistory();
    //promises
    useEffect(()=> {
        fetch('/logout', {
            method: "GET",
            headers: {
                Accept: "application/json"
            },
            credentials: "include"
        }).then((res)=>{
            dispatch({type: "ADMIN", payload: false});
         
            history.push('/Home', {
                  replace: true
            });
            if(res.status!==200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    });

    return ( 
        <></>
    )
}
export default Logout;