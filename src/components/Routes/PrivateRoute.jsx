import { Navigate } from 'react-router-dom';



export const PrivateRoute =  ({ children}) => {

    const userIsLogin = window.localStorage.getItem('checkLogIn');
    // const userIsLogin = useSelector(getUserLogin);
    console.log(userIsLogin);

    return userIsLogin ?  children : <Navigate to="/" />;
    
    };

    export default PrivateRoute;
    




