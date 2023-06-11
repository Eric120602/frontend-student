export const checkLogin = () => {
    if(localStorage.getItem("is-loggedin") === "1")
        return true
    return false
}

export const setLogin = (isLoggedin) => {
    localStorage.setItem("is-loggedin", isLoggedin)
}
