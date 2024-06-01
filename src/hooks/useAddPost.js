import { useCallback, useState } from "react";
import { post } from "../api/api";


export const useAddPost = () => {
    const [status, setStatus] = useState();
    const addPost = useCallback(async (data) => {
        const { status: apiStatus } = await post('https://jsonplaceholder.typicode.com/posts', data);
        setStatus(apiStatus);
    }, []);

    return { addPost, status };
}

export default useAddPost;