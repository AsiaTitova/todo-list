import React from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


import './Login.scss';

const Login = ({email,
  setEmail,
  password,
  setPassword,
  handleLogin,
  handleSignup,
  hasAccount,
  setHasAccount,
  emailError,
  passwordError}) => {


  return (
    <section className="login__window">
    <form className="login__container">
        <div className="login__wrap">
            <label className="visually-hidden">Email address</label>
            <input
                type="email"
                autoFocus
                required
                className="login__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted text-red">{emailError}</small>
        </div>
        <div className="login__wrap">
            <label className="visually-hidden">Password</label>
            <input
                type="password"
                required
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted text-red">{passwordError}</small>
        </div>
        <div className="login__wrap">
            {hasAccount ? (
                <div>
                   <button onClick={handleLogin} type="submit" className="btn btn-primary">Sign in</button>
                    <small id="emailHelp" className="form-text text-muted">Don`t have an account ? <span onClick={() => setHasAccount(!hasAccount)} className="mark-link">Sign up</span> </small>
                </div>
            ) : (
                <div>
                   <button onClick={handleSignup} type="submit" className="login__submit">Sign up</button>
                    <small id="emailHelp" className="form-text text-muted">Have an account ? <span onClick={() => setHasAccount(!hasAccount)} className="mark-link">Sign in</span> </small>
                </div>
            )}
        </div>

    </form>
</section>
  );
};

// const mapDispatchToProps = dispatch => ({
//   userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
// })

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMsg: PropTypes.string,
}

export default connect(/*null, mapDispatchToProps*/)(Login);
