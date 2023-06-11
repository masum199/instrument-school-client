import { useQuery } from "@tanstack/react-query";


const useBookings = () => {
    const {data: bookings = [],isLoading: loading, refetch} = useQuery({
        queryKey: ['bookings'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/bookings')
            return res.json()
        }
    })
    return [bookings, loading, refetch]

};

export default useBookings;