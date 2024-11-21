import React, { useEffect, useState } from "react";
import { WrapperContainerRight, WrapperContainerleft, WrapperTextLight } from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { Image } from 'antd'
import imageLogo from '../../assets/images/logoLoginn.png'
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as UserService from '../../services/UserService'
import { useMutationHooks } from "../../hooks/useMutationHook";
import Loading from "../../components/LoadingComponent/Loading";
import * as message from "../../components/Message/Message"


const SignUpPage = () => {
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const mutation = useMutationHooks(
        data => UserService.signupUser(data)
    )

    const { data, isPending, isSuccess, isError } = mutation

    useEffect(() => {
        if (isSuccess && data?.status !== 'ERR') {
            message.success()
            handleNavigateSignIn()
        } else if (isError) {
            message.error()
        }
    }, [isSuccess, isError])

    const handleOnchangeEmail = (value) => {
        setEmail(value)
    }
    const handleOnchangePassword = (value) => {
        setPassword(value)
    }
    const handleOnchangeConfirmPassword = (value) => {
        setConfirmPassword(value)
    }

    const handleNavigateSignIn = () => {
        navigate('/sign-in')
    }
    const handleSignUp = () => {
        mutation.mutate({
            email,
            password,
            confirmPassword
        })
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.53)', height: '100vh' }}>
            <div style={{ width: '700px', height: '450px', borderRadius: '6px', background: '#fff', display: 'flex' }}>
                <WrapperContainerleft>
                    <h1>Xin Chào</h1>
                    <p>Đăng ký tài khoản tại TheGioiJack</p>
                    <InputForm style={{ marginBottom: '20px' }} placeholder="Email đăng ký" value={email} onChange={handleOnchangeEmail} />
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
                    <div style={{ position: 'relative' }}>
                        <span
                            onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
                            style={{
                                zIndex: 10,
                                position: 'absolute',
                                top: '4px',
                                right: '8px'
                            }}
                        >{
                                isShowConfirmPassword ? (
                                    <EyeFilled />
                                ) : (
                                    <EyeInvisibleFilled />
                                )
                            }
                        </span>
                        <InputForm placeholder="Xác nhận mật Khẩu" type={isShowConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={handleOnchangeConfirmPassword} />
                    </div>
                    {data?.status === 'ERR' && <span style={{ color: 'red' }}>{data?.message}</span>}
                    <Loading isPending={isPending}>
                        <ButtonComponent
                            disabled={!email.length || !password.length || !confirmPassword}
                            onClick={handleSignUp}
                            size={40}
                            styleButton={{
                                background: '#e30019',
                                height: '48px',
                                width: '100%',
                                border: 'none',
                                borderRadius: '4px',
                                margin: '26px 0 10px'
                            }}
                            textbutton={'Đăng Ký'}
                            styletextbutton={{ color: '#fff', fontSize: '20px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </Loading>
                    <p style={{ marginTop: '5px' }}>Bạn đã có tài khoản?
                        <WrapperTextLight onClick={handleNavigateSignIn}> Đăng nhập</WrapperTextLight></p>
                </WrapperContainerleft>
                <WrapperContainerRight>
                    <Image src={imageLogo} preview={false} alt="image-logo" height='125px' width='125px' />
                    <h4>Nhận nhiều ưu đãi khi đăng nhập </h4>
                    <h4>và mua hàng tại THEGIOIJACK</h4>
                </WrapperContainerRight>
            </div>
        </div>
    )
}
export default SignUpPage
