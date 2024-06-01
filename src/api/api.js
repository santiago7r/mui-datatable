import { setDbItem, getDbItem } from "../utils/db";

export async function getAll(url='https://jsonplaceholder.typicode.com/posts') {
    try {
        const response = await fetch(url)
        const result = await response.json();

        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function getById(url='https://jsonplaceholder.typicode.com/posts', id='1') {
    try {
        const response = await fetch(`${url}${id}`)
        const result = await response.json();

        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error("Error:", error);
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
        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function put(url = 'https://jsonplaceholder.typicode.com/posts/1', data) {
    try {
        const response = await (url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          })

        const result = await response.json();
        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}

export async function deleteItem(url='https://jsonplaceholder.typicode.com/posts/1') {
    try {
        const response = fetch(url, {
            method: 'DELETE',
        });
        const result = await response.json();
        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error("Error:", error);
    }
}