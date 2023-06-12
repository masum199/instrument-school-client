import { useQuery } from "@tanstack/react-query";


const getUser = () => {
    const {data: users = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await fetch('https://school-server-side.vercel.app/users')
            return res.json()
        }
    })
    return [users, loading, refetch]

};

export default getUser;