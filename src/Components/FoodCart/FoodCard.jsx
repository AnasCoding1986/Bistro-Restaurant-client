
import Swal from "sweetalert2";
import UseAuth from "../../Hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";




const FoodCard = ({ item }) => {
    const { name, recipe, image, price, _id } = item;
    const { user } = UseAuth();
    const navigate = useNavigate();
    const location = useLocation();


    const handleFoodToCart = food => {
        console.log(food);
        if (user && user.email) {
            console.log("user exixst");
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axios.post('http://localhost:5000/carts',cartItem)
            .then(res=>{
                console.log(res.data);
                if (res.data.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added to your cart`,
                        showConfirmButton: false,
                        timer: 1500
                      });
                }
            })
        } else {
            Swal.fire({
                title: "You are not loggedin",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login",{state: {from:location}});
                }
            });
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="itemImg" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-5 px-5 mt-5">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button
                        onClick={() => handleFoodToCart(item)}
                        className="btn border-0 border-b-4 mt-5 btn-outline bg-slate-100 border-orange-400">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;