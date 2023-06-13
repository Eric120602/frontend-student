import handler from "./handler"

export const submitBookSession = (vehicleId, body) => {
    return handler("POST", `/vehicles/${vehicleId}/schedule`, body)
}

export const getLeaves = () => {
    return handler("GET", `/leaves`)
}

export const getSchedule = () => {
    return handler("GET", "/schedules/sessions")
}