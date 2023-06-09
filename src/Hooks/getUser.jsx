import { useQuery } from "@tanstack/react-query";


const getUser = () => {
    const {data: users = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        }
    })
    return [users, loading, refetch]

};

export default getUser;