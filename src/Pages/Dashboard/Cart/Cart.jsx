import { FaTrashAlt } from "react-icons/fa";
import UseCarts from "../../../Hooks/UseCarts";
import Swal from "sweetalert2";
import UseAiosSecure from "../../../Hooks/UseAiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
    const [cart, refetch] = UseCarts();
    const totlaPrice = cart.reduce((total, item) => total + item.price, 0);
    const axiosSecure = UseAiosSecure();

    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (result.isConfirmed) {
                    console.log('okay');
                    axiosSecure.delete(`/carts/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) {
                                refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                }
            }
        });

    }
    return (
        <div>
            <div className="flex justify-evenly mb-6">
                <div className="text-4xl">Items: {cart.length}</div>
                <div className="text-4xl">Total Price: {totlaPrice}</div>
                {
                    cart.length ?
                        <Link to="/dashboard/payment">
                            <button className="btn btn-primary">Pay</button>
                        </Link> :
                        <button disabled className="btn btn-primary">Pay</button>
                }
            </div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <th>
                                    <label>
                                        {index + 1}
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>{item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="btn btn-ghost btn-xs text-yellow-600"><FaTrashAlt></FaTrashAlt></button>
                                </th>
                            </tr>)
                        }
                        {/* row 1 */}

                    </tbody>

                </table>
            </div>
        </div>


    );
};

export default Cart;