import { useQuery } from "@tanstack/react-query";
import UseAiosSecure from "./UseAiosSecure";



const UseCarts = () => {
    const axiosSecure = UseAiosSecure();
    const {data: cart=[]} = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosSecure.get('/carts');
            return res.data;
        }
    });
    return [cart]
};

export default UseCarts;