//Setting Local Storage
export const setLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//Getting Local Storage
export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}

//Delete item in Local Storage
export const deleteLocalStorage = (key) => {
    localStorage.removeItem(key);
}