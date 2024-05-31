import { useEffect, useState } from "react";


const usePosts = () => {
    const [data, setData] = useState([]);
      
    useEffect(() => {
      async function fetchPost() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        const posts = await res.json();
    
        // Convert array of objects into array of arrays
        const adaptedPosts = posts.map(Object.values);

        setData(JSON.parse(localStorage.getItem('postsFromAPI')) ? JSON.parse(localStorage.getItem('postsFromAPI')) : adaptedPosts);
      }
    
      fetchPost();
    }, [])
    return {data};
}

export default usePosts;