import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";


const AddItems = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <div>
            <SectionTitle heading="add an item" subheading="what's new"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("Name")} />
                    <select {...register("Category")}
                     className="select select-bordered w-full max-w-xs">
                        <option disabled selected>Select a category</option>
                        <option value="Salad">Salad</option>
                        <option value="Pizza">Pizza</option>
                        <option value="Soup">Soup</option>
                        <option value="Desert">Desert</option>
                        <option value="Drink">Drink</option>
                        <option value="Salad">Salad</option>
                    </select>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;