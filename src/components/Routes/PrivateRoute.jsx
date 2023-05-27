import { Navigate } from 'react-router-dom';



export const PrivateRoute =  ({ children}) => {

    const userIsLogin = window.localStorage.getItem('checkLogIn');
    console.log(userIsLogin);

    return (userIsLogin === 'true') ?  children : <Navigate to='/' />;
    
    };

    export default PrivateRoute;
    




