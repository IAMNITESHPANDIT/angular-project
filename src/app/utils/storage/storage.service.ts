export const setStorage = (key:string, value:string)=>{
    try {
        localStorage.setItem(key,value);
    } catch (error) {
        console.error(error);
    }
}

export const getStorage = (keyName:string)=>{
    try {
       const storage= localStorage.getItem(keyName);
       return storage
    } catch (error) {
        console.error(error);
        return null
    }
}

