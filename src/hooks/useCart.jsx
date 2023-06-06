import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { user } = useAuth();
    const token = localStorage.getItem("access-token")
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !!user?.email && !!token,
        // queryFn: async () => {
        //     const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        //         headers: {
        //             authorization: `bearer ${token}`
        //         }
        //     })
        //     // console.log(response);
        //     return response.json();
        // },
        queryFn: async () => {
            const response = await axiosSecure(`/carts?email=${user?.email}`)
            // console.log(response);
            return response.data;
        },
    })
    // console.log(cart);
    return [cart, refetch]

}
export default useCart;