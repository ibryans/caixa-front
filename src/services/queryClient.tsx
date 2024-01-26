import { QueryClient } from "react-query";

export const queryClient = new QueryClient()

export const reqConfig = {
    headers: {
        Authorization: `bearer ${localStorage.getItem('accessToken')}`
    }
}