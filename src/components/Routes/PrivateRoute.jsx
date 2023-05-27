import { useSelector } from 'react-redux';
import { getUserLogin } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute =  ({ component: Component, redirectTo = '/' }) => {
    const UserLogin = useSelector(getUserLogin);


        console.log( UserLogin );
        return UserLogin ? <Navigate to={redirectTo} /> : Component;
    
    };
    




