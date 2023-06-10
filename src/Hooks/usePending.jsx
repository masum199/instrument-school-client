import { useQuery } from "@tanstack/react-query";


const usePending = () => {
    const {data: pending = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['pending'],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/classes/filter/${'pending'}`)
            return res.json()
        }
    })
    return [pending, loading, refetch]

};

export default usePending;