import React from 'react';

export default class LoginForm extends React.Component {
    render() {
        return (
            <div className='login-form-container'>
                <h3 className='login-header'>Log In</h3>
                <form className='login-form'>
                    <div className='input-container'>
                        <label for='username' className='input-label'>Username</label>
                        <input className='form-input' name='username' id='username' type='text' placeholder='Input username here'></input>
                    </div>
                    <div className='input-container'>
                        <label for='password' className='input-label'>Password</label>
                        <input className='form-input' name='password' id='password' type='password' placeholder='Input password here'></input>
                    </div>
                    <div className='button-container'>
                        <button type='submit' className='submit-button'>Log In</button>
                    </div>
                </form>
            </div>
        )
    }
}