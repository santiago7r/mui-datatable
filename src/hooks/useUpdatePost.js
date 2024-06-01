import { useCallback, useState } from "react";
import { put } from "../api/api";


export const useUpdatePost = () => {
    const [status, setStatus] = useState();
    const updatePost = useCallback(async (data) => {
        const { status: apiStatus } = await put(data);
        setStatus(apiStatus);
    }, []);

    return { updatePost, status };
}

export default useUpdatePost;