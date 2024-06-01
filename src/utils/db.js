export const getDbItem = (itemKey = 'postsFromAPI') => {
    return JSON.parse(localStorage.getItem(itemKey));
};

export const setDbItem = (dbItem, key = 'postsFromAPI') => {
    localStorage.setItem(key, JSON.stringify(dbItem));
};