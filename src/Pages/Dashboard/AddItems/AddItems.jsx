import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic"


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`;

const AddItems = () => {
    const { register, handleSubmit } = useForm();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imagebb then get an url
        const imageFile = {image: data.image[0]};
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'Content-Type': 'multipart/form-data'
              }
        })
        console.log(res.data);
    }
    return (
        <div>
            <SectionTitle heading="add an item" subheading="what's new"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register("Name", {required:true})}
                            className="input input-bordered w-full" />

                    </label>

                    <div className="flex gap-6">
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue="default" {...register("Category, {required:true}")}
                                className="select select-bordered w-full">
                                <option disabled value="default">Select a category</option>
                                <option value="Salad">Salad</option>
                                <option value="Pizza">Pizza</option>
                                <option value="Soup">Soup</option>
                                <option value="Desert">Desert</option>
                                <option value="Drink">Drink</option>
                                <option value="Salad">Salad</option>
                            </select>

                        </label>
                        <label className="form-control w-full my-6">
                            <div className="label">
                                <span className="label-text">Price</span>
                            </div>
                            <input
                                type="number"
                                placeholder="Price"
                                {...register("Price, {required:true}")}
                                className="input input-bordered w-full" />

                        </label>

                    </div>

                    {/* textarea */}
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Detail</span>
                        </div>
                        <textarea {...register('recipe, {required:true}')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                    </label>

                    {/* file input */}
                    <input {...register('image, {required:true}')} type="file" className="file-input w-full my-6" />


                    <button className="btn">Add item <FaUtensils className="ml-4"></FaUtensils></button>
                </form>
            </div>
        </div>
    );
};

export default AddItems;