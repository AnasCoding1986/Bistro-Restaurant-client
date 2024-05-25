import { CiCircleList } from "react-icons/ci";
import { FaAd, FaBook, FaBookmark, FaCalendar, FaHome, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { FaHouseMedical, FaUsersLine } from "react-icons/fa6";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";


const Dashboard = () => {

    // todo
    // get the admin value from the Database;
    const [isAdmin] = useAdmin();

    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-yellow-500">
                <ul className="menu">
                    {
                        isAdmin ?
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'><FaHome></FaHome>Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/reservation'><FaUtensils />Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><CiCircleList />Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/review'><FaBookmark />Manage bookings</NavLink>
                                </li>
                                <li>
                                    <NavLink to='users'><FaUsersLine />All users</NavLink>
                                </li>
                            </>
                            :
                            <>
                            </>
                    }
                    <li>
                        <NavLink to='/dashboard/userHome'><FaHome></FaHome>User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/reservation'><FaCalendar></FaCalendar>Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/review'><FaAd></FaAd>Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/bookings'><FaBook></FaBook>My bookings</NavLink>
                    </li>
                    <div className="divider"></div>
                    {/* shared components */}
                    <li>
                        <NavLink to='/'><FaHouseMedical></FaHouseMedical>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'><FaBook></FaBook>My Orders</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 p-10">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;