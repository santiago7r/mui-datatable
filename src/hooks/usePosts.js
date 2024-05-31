import { useEffect, useState } from "react";


const usePosts = () => {
    const [data, setData] = useState([]);
      
    useEffect(() => {
      async function fetchPost() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        const posts = await res.json();
        console.log({posts})
    
        // Convert array of objects into array of arrays
        setData(posts.map(Object.values));
      }
    
      fetchPost();
    }, [])

    return {data};
}

export default usePosts;