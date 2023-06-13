import handler from "./handler"

export const getVehicles = (params) => {

    return handler("GET", "/vehicles", {}, params)
}

export const getAvailableVehicleTypesForScheduling = () => {
    return handler("GET", "/vehicles/types/available")
}

export const getAvailableVehiclesInSession = (params) => {
    return handler("GET", "/vehicles/available", {}, params)
}