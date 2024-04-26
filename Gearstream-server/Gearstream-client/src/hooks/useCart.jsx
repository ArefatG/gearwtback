import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"
import { useQuery } from "@tanstack/react-query";


const useCart = () => {
    const { user } = useContext(AuthContext);
    const token = localStorage.getItem('access-token')

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`/carts?email=${user?.email}`)
            return res.json();
        },
    })

    return [cart, refetch]

}
export default useCart;
