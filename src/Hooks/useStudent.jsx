import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const useStudent = () => {
    const {user,loading} = useContext(AuthContext)
    const {data: isStudent, isLoading: isStudentLoading, refetch} = useQuery({
        queryKey: ['isStudent'],
        enabled: !loading,
        queryFn: async () => {
            const response = await axios.get(`http://localhost:5000/users/student/${user?.email}`);

            return response.data.student;
        }
    })
    return [isStudent, isStudentLoading,refetch]
};

export default useStudent;