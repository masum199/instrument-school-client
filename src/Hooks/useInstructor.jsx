import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const useInstructor = () => {
    const {user,loading} = useContext(AuthContext)
    const {data: isInstructor, isLoading: isInstructorLoading, refetch} = useQuery({
        queryKey: ['isInstructor'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`https://school-server-side.vercel.app/users/instructor/${user?.email}`);

            return response.data.instructor;
        }
    })
    return [isInstructor, isInstructorLoading,refetch]
};

export default useInstructor;