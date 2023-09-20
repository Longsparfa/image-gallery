import { useAuth } from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user } = useAuth();
  
    if (!user) {
        return (
        <>
         <Navigate to='/login' replace={true} />
         {/* <Navigate to='/register' replace={true} /> */}
        </>
        )
    }
  return children;
};

export default PrivateRoutes;