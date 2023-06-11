import { useQuery } from "@tanstack/react-query";


const useDescending = () => {
    const {data: descending = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['descending'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/classes/descending')
            return res.json()
        }
    })
    return [descending, loading, refetch]

};

export default useDescending;