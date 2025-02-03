import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
type Props = {}

function AuthRoutes({}: Props) {
  return (
    <React.Fragment>
        <div className='relative auth_root'>
                <Routes>
                        <Route path={"/login"} Component={LoginPage} />
                        <Route path="/signup" Component={SignUpPage} />
                </Routes>
        </div>
    </React.Fragment>
  )
}

export default AuthRoutes