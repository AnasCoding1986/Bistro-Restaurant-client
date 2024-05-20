

const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="itemImg" /></figure>
            <p className="bg-slate-900 text-white absolute right-0 mr-5 px-5 mt-5">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn border-0 border-b-4 mt-5 btn-outline bg-slate-100 border-orange-400">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;