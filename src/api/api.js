import { setDbItem, getDbItem } from '../utils/db';

export async function getAll(url='https://jsonplaceholder.typicode.com/posts') {
    try {
        const currentPostsInLocalStorage = getDbItem('postsFromAPI');
        if( currentPostsInLocalStorage && currentPostsInLocalStorage.length > 0) {
            console.log('from cache');
            return { result: currentPostsInLocalStorage, status: 'success' };
        } else {
            console.log('from server');
            const response = await fetch(url);
            const raw = await response.json();
            const result = raw.map(Object.values);
            setDbItem(result);
            console.log('Success:', result);
            return { result, status: 'success' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { status: 'error' };
    }
}

export async function getById(url='https://jsonplaceholder.typicode.com/posts', id='1') {
    try {
        const response = await fetch(`${url}${id}`)
        const result = await response.json();

        console.log('Success:', result);
        return { result, status: 'success' };
    } catch (error) {
        console.error('Error:', error);
        return { status: 'error' };
    }
}

export async function post(url = 'https://jsonplaceholder.typicode.com/posts', data) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

        const result = await response.json();
        const currentPostsInLocalStorage = getDbItem();
        const newCurrentPostsInLocalStorage = [data, ...currentPostsInLocalStorage]
        setDbItem(newCurrentPostsInLocalStorage);

        console.log('Success:', result);
        return { result, status: 'success' };
    } catch (error) {
        console.error('Error:', error);
        return { status: 'error' };
    }
}

export async function put(data, url = 'https://jsonplaceholder.typicode.com/posts/1') {
    try {
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
        })
        const result = await response.json();

        const currentPostsInLocalStorage = getDbItem();
        const updateCurrentPostsInLocalStorage = currentPostsInLocalStorage.map(post => (post[1] === data[1] ? data : post));
        setDbItem(updateCurrentPostsInLocalStorage);

        console.log('Success:', result);
        return { result, status: 'success' };
    } catch (error) {
        console.error('Error:', error);
        return { status: 'error' };
    }
}

export async function deleteItem(data, url='https://jsonplaceholder.typicode.com/posts/1') {
    try {
        const response = await fetch(url, {
            method: 'DELETE',
        });
        const result = await response.json();
        setDbItem(data);
        console.log('Success:', result);
        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}