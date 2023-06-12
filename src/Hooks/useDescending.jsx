import { useQuery } from "@tanstack/react-query";


const useDescending = () => {
    const {data: descending = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['descending'],
        queryFn: async() => {
            const res = await fetch('https://school-server-side.vercel.app/classes/descending')
            return res.json()
        }
    })
    return [descending, loading, refetch]

};

export default useDescending;