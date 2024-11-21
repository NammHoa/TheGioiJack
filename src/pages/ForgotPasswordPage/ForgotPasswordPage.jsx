import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputForm from '../../components/InputForm/InputForm';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import * as UserService from '../../services/UserService';
import Loading from "../../components/LoadingComponent/Loading";
import { WrapperTextLight } from "./style";

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleOnChangeEmail = (value) => {
        setEmail(value);
    }

    const handleResetPassword = async () => {
        setIsPending(true);
        try {
            const response = await UserService.resetPassword(email);
            setMessage(response.message || 'Hướng dẫn đặt lại mật khẩu đã được gửi tới email của bạn.');
        } catch (error) {
            setMessage(error.message || 'Đã xảy ra lỗi. Vui lòng thử lại.');
        } finally {
            setIsPending(false);
        }
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ width: '400px', padding: '20px', borderRadius: '6px', background: '#fff' }}>
                <h1>Quên mật khẩu</h1>
                <p>Nhập email để khôi phục</p>
                <InputForm style={{ marginBottom: '20px' }} placeholder="Email" value={email} onChange={handleOnChangeEmail} />
                {message && <span style={{ color: message.includes('success') ? 'green' : 'red' }}>{message}</span>}
                <Loading isPending={isPending}>
                    <ButtonComponent
                        disabled={!email.length}
                        onClick={handleResetPassword}
                        size={40}
                        styleButton={{
                            background: '#e30019',
                            height: '48px',
                            width: '100%',
                            border: 'none',
                            borderRadius: '4px',
                            margin: '26px 0 10px'
                        }}
                        textbutton={'Reset Password'}
                        styletextbutton={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}
                    ></ButtonComponent>
                </Loading>
                <WrapperTextLight onClick={() => navigate('/sign-in')}>Đăng nhập</WrapperTextLight>
            </div>
        </div>
    );
}

export default ForgotPasswordPage;
