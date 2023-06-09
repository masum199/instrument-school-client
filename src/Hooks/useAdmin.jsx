import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const useAdmin = () => {
    const {user} = useContext(AuthContext)
    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin'],
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/users/admin/${user?.email}`);
            return response.data.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;