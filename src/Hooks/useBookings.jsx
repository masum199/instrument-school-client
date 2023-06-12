import { useQuery } from "@tanstack/react-query";


const useBookings = () => {
    const {data: bookings = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async() => {
            const res = await fetch('https://school-server-side.vercel.app/bookings')
            return res.json()
        }
    })
    return [bookings, loading, refetch]

};

export default useBookings;