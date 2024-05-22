import { useQuery } from "@tanstack/react-query";
import UseAiosSecure from "./UseAiosSecure";
import UseAuth from "./UseAuth";



const UseCarts = () => {
    const axiosSecure = UseAiosSecure();
    const {user} = UseAuth();
    const {refetch, data: cart=[]} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    });
    return [cart,refetch]
};

export default UseCarts;