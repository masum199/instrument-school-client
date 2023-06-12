import { useQuery } from "@tanstack/react-query";


const useClasses = () => {
    const {data: classes = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['class'],
        queryFn: async() => {
            const res = await fetch('https://school-server-side.vercel.app/classes')
            return res.json()
        }
    })
    return [classes, loading, refetch]

};

export default useClasses;