import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useFetchData = (key, url, fetchEnabled=true)=> {

    return useQuery({
        queryKey:Array.isArray(key) ? key : [key],
        queryFn: ()=> axios.get(import.meta.env.VITE_APP_API_URL + url),
        staleTime:24 * 60 * 60 * 1000,
        enabled:fetchEnabled
    })
}

export default useFetchData