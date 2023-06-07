import handler from "./handler"

export const getVehicles=(params)=>{
    let queryParams=""
    if (params){
       let queryParamsProperties =[]
        for (const property in params) {
            queryParamsProperties.push(`${property}=${params[property]}`)
          }
          queryParams="?"+queryParamsProperties.join("&")

    }
    return handler("GET","/vehicles"+queryParams)
}


