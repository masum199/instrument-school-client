import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const useAdmin = () => {
    const {user,loading} = useContext(AuthContext)
    const {data: isAdmin, isLoading: isAdminLoading, refetch} = useQuery({
        queryKey: ['isAdmin'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`https://school-server-side.vercel.app/users/admin/${user?.email}`);

            return response.data.admin;
        }
    })
    return [isAdmin, isAdminLoading,refetch]
};

export default useAdmin;