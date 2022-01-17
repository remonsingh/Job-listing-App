export const  getLocal = (key) => {
    let loal = JSON.parse(localStorage.getItem(key))
    return loal
}

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data))
}