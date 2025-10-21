
import { useContext } from "react";
import { AuthContext } from "../components/context/auth.context";
import { Navigate, useNavigate } from "react-router-dom";
import { Result, Button } from "antd";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    
    // Nếu user đã đăng nhập, cho phép truy cập
    if (user && user._id) {
        return <>{children}</>;
    }
    
    // Nếu chưa đăng nhập, hiển thị trang 403
    return (
        <Result 
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                    <Button type="primary" onClick={() => navigate('/')}>Back Home</Button>
                    <Button type="primary" onClick={() => navigate('/login')}>Login</Button>
                </div>
            }
        />
    );
}

export default PrivateRoute;
