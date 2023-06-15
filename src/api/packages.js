import handler from "./handler"

export const listPackages = () => {
    return handler("GET", "/packages")
}

export const createCheckoutSession = (packageId) => {
    return handler("POST", `/packages/${packageId}/checkout/session`)
}