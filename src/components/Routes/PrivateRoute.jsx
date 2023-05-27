import { Navigate } from 'react-router-dom';



export const PrivateRoute =  ({ children}) => {

    const userIsLogin = window.localStorage.getItem('checkLogIn');
    // const userIsLogin = useSelector(getUserLogin);
    console.log(userIsLogin);

    // if (UserLogin) {
    //     console.log("Load");
    //     return Component;

    // } else {
    //     console.log("to home");
    //     return <Navigate to="/" /> ;
    // }

    return userIsLogin ?  children : (<Navigate to="/" />);
    
    };

    export default PrivateRoute;
    




