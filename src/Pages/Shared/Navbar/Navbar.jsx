import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaCartPlus } from "react-icons/fa";
import UseCarts from "../../../Hooks/UseCarts";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCarts();

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navOptions = <>
        <li className="ml-5"><Link to="/">Home</Link></li>
        <li className="ml-5"><Link to="/menu">Our menu</Link></li>
        <li className="ml-5"><Link to="/order/salad">Order</Link></li>

        <li className="ml-5"><Link to="/signup">SignUp</Link></li>
        <li className="ml-5"><Link to="/dashboard/cart">
            <button className="btn">
            <FaCartPlus />
                <div className="badge badge-secondary">{cart.length}</div>
            </button>
        </Link></li>

        {
            user ?
                <>
                    <button onClick={handleLogOut} className="btn btn-ghost">Logout</button>
                </>
                :
                <>
                    <li className="ml-5"><Link to="/login">Login</Link></li>
                </>
        }

    </>

    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black max-w-screen-xl mx-auto text-white bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu list-none menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Bistro Boss</a>
            </div>
            <div className="navbar-center list-none hidden lg:flex">
                {
                    navOptions
                }
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;