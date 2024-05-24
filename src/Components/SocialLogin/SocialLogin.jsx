import { FaGoogle } from "react-icons/fa";
import UseAuth from "../../Hooks/UseAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {googleSignIn} = UseAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        console.log('clicked');
        googleSignIn()
        .then(res => {
            const userInfo = {
                email: res.user?.email,
                name: res.user?.displayName,
            }
            axiosPublic.post("/users", userInfo)
            .then(res=>{
                console.log(res.data);
                navigate('/')
            })
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="px-8 py-2">
             <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Button
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;