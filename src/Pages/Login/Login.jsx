
import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const capthaRef = useRef(null);
    const [disabled, setDisabled] = useState(true);

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
            })
    }

    const handleValidateCapcha = () => {
        const user_captha_value = capthaRef.current.value;
        if (validateCaptcha(user_captha_value)) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    return (
        <>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" ref={capthaRef} placeholder="type capcha" name="capcha" className="input input-bordered" required />
                                <button onClick={handleValidateCapcha} className="btn btn-xs mt-2">Button</button>
                            </div>
                            <div className="form-control mt-6">
                                <input disabled={disabled} type="submit" value="Login" className="btn btn-primary" />
                            </div>
                        </form>
                        <p><small>New Here? <Link to="/signup">Create an account</Link></small></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;