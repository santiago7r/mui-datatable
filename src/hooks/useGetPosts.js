import { useEffect, useState } from "react";
import { getAll } from "../api/api";

const useGetPosts = () => {
    const [data, setData] = useState([]);
      
    useEffect(() => {
      async function getAllPost() {
        const { result } = await getAll();
        setData(result);
      }
    
      getAllPost();
    }, [])
    return {data};
}

export default useGetPosts;
