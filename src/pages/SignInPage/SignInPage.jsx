import React, { useEffect, useState } from "react";
import { WrapperContainerRight, WrapperContainerleft, WrapperTextLight } from "./style";
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageLogo from '../../assets/images/logoLoginn.png'
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import * as UserService from '../../services/UserService'
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux'
import { updateUser } from "../../redux/slides/UserSlide";


const SignInPage = () => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const mutation = useMutationHooks(
        data => UserService.loginUser(data)
    )

    const { data, isPending, isSuccess } = mutation

    useEffect(() => {
        if (isSuccess) {
            if (location?.state) {
                navigate(location?.state)
            } else {
                navigate('/')
            }
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))
            localStorage.setItem('refresh_token', JSON.stringify(data?.refresh_token))
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token)
                }
            }
        }
    }, [isSuccess])

    const handleGetDetailsUser = async (id, token) => {
        const storage = localStorage.getItem('refresh_token')
        const refreshToken = JSON.parse(storage)
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token, refreshToken }))
    }

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangePassword = (value) => {
        setPassword(value)
    }
    const handleNavigateSignUp = () => {
        navigate('/sign-up')
    }
    const handleNavigateForgotPassword = () => {
        navigate('/forgot-password')
    }
    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
    }
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ width: '700px', height: '450px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerleft>
                    <h1>Xin Chào</h1>
                    <p>Đăng nhập hoặc tạo tài khoản</p>
                    <InputForm style={{ marginBottom: '20px' }} placeholder="Email" value={email} onChange={handleOnchangeEmail} />
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowPassword(!isShowPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputForm placeholder="Mật Khẩu" type={isShowPassword ? "text" : "password"} value={password} onChange={handleOnchangePassword} />
                    </div>
                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    <Loading isPending={isPending}>
                        <ButtonComponent
                            disabled={!email.length || !password.length}
                            onClick={handleSignIn}
                            size={40}
                            styleButton={{
                                background: '#e30019',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '0 0 10px'
                            }}
                            textbutton={'Đăng nhập'}
                            styletextbutton={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </Loading>
                    <WrapperTextLight onClick={handleNavigateForgotPassword}>Quên mật khẩu</WrapperTextLight>
                    <p style={{ marginTop: '5px' }}>Bạn chưa có tài khoản?
                        <WrapperTextLight onClick={handleNavigateSignUp}> Tạo tài khoản</WrapperTextLight></p>
                </WrapperContainerleft>
                <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt="image-logo" height="125px" width="125px"  />
                    <h4 >Nhận nhiều ưu đãi khi đăng nhập </h4>
                    <h4>và mua hàng tại THEGIOIJACK</h4>
                </WrapperContainerRight>
            </div>
        </div >
    )
}
export default SignInPage
