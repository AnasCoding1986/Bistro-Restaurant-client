import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../Components/SocialLogin/SocialLogin";




const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const {createUser,updateUserProfile} = useContext(AuthContext);
    const Navigate = useNavigate();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                const userInfo = {
                    name: data.name,
                    email: data.email
                };
                axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your profile updated",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          Navigate("/")
                    }
                })
               
            })
            .catch(error =>console.log(error))
        })
    };


    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">SignUp now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register("PhotoURL", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                                {errors.name && <span>PhotoURL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span>Email field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20 })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span>Password must have at least 6 charecter but not more than 20</span>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className="btn btn-primary" value="Submit" />
                            </div>
                        </form>
                        <p className="px-6">Already have an account? please <Link to="/login">Login</Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignUp;