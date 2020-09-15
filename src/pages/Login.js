import React from "react";
import "../design/Authentication.css";
import {axios} from "../lib/axios";

function Login () {

    const [state, setState] = React.useState({
        phoneNumber: "",
        password: ""
    })

    const handleChange = ({target}) => {
        setState({...state, [target.name]: target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        axios.defaults.withCredentials = true;
        axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie").then(response => {
            axios.post('http://127.0.0.1:8000/api/customer_login', state).then(res => {
                console.log(res);
            })
        })
    }

    return(
        <div className={'text-center'}>
            <br/><br/><br/>
            <form className={'form-signin'} onSubmit={onSubmit}>
                <img className={'mb-4'} src={'https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg'} alt={'logo'} width={'72'} height={'72'}/>
                <h1 className={'h3 mb-3 font-weight-normal'}>Please Sign-In</h1>
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="text" id="phoneNumber" className="form-control" required="" name={'phoneNumber'} value={state.phoneNumber} onChange={handleChange}/><br/>
                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password" id="password" className="form-control" required="" name={'password'} value={state.password} onChange={handleChange}/>
                <br/>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </div>
    );
}

export default Login;