import React from 'react';
import MyInput from './../components/UI/input/MyInput';
import MyButton from './../components/UI/button/MyButton';
import { useContext } from 'react';
import { AuthContext } from '../context';

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const login = event => {
        event.preventDefault();
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className='login__page-wrapper'>
            <div className='login__page'>
                <h1 className='login__page-title'>Login page</h1>
                <form onSubmit={login}>
                    <MyInput type='text' placeholder='Enter your login'></MyInput>
                    <MyInput type='password' placeholder='Enter your password'></MyInput>
                    <MyButton>Sign in</MyButton>
                </form>
            </div>
        </div>
    );
};

export default Login;