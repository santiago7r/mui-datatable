import { useCallback, useState } from "react";
import { deleteItem } from "../api/api";


export const useDeletePost = () => {
    const [status, setStatus] = useState();
    const deletePost = useCallback(async (data) => {
        const { status: apiStatus } = await deleteItem(data);
        setStatus(apiStatus);
    }, []);

    return { deletePost, status };
}

export default useDeletePost;