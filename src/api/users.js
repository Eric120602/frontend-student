import handler from "./handler"

export const getPackreq = () => {
    return handler("POST", "/packages/type/payment/notify")
}

export const getListpack = () => {
    return handler("GET", "/packages")
}

export const buyThePack = (body) => {
    const url = `/packages/type/payment/notify`
    return handler("POST", url, body)
}

export const loginUser = (body) => {
    const url = `/trainees/login`
    return handler("POST", url, body)
}
