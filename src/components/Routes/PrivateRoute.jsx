import { Navigate } from 'react-router-dom';


export const PrivateRoute =  ({ component: Component}) => {

    const UserLogin = window.localStorage.getItem('checkLogIn');
    console.log(UserLogin);

    if (UserLogin) {
        console.log("Load");
        return Component;

    } else {
        console.log("to home");
        return <Navigate to="/" /> ;
    }

    // return UserLogin ?  Component : <Navigate to="/" />;
    
    };
    




