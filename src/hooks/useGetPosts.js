import { useEffect, useState } from "react";


const useGetPosts = () => {
    const [data, setData] = useState([]);
      
    useEffect(() => {
      async function fetchPost() {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    
        const posts = await res.json();
    
        // Convert array of objects into array of arrays
        const adaptedPosts = posts.map(Object.values);

        const currentPostsInLocalStorage = JSON.parse(localStorage.getItem('postsFromAPI'));
        console.log({currentPostsInLocalStorage});

        setData(currentPostsInLocalStorage && currentPostsInLocalStorage.length > 0 ? JSON.parse(localStorage.getItem('postsFromAPI')) : adaptedPosts);
      }
    
      fetchPost();
    }, [])
    return {data};
}

export default useGetPosts;