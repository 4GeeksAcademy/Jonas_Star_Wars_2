export const getCharacters = async (dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/people/")
    const data = await response.json()
    dispatch({type: "set_characters", payload: data.results})
}


export const getPlanets = async (dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/planets/")
    const data = await response.json()
    dispatch({type: "set_planets", payload: data.results})
}


export const getVehicles = async (dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/vehicles/")
    const data = await response.json()
    dispatch({type: "set_vehicles", payload: data.results})
}


// CARDS DETAILS

export const getCharacter = async (uid, setData) => {
    const response = await fetch("https://www.swapi.tech/api/people/" + uid)
    const data = await response.json()
    setData(data.result.properties)
}

export const getPlanet = async (uid, setData) => {
    const response = await fetch("https://www.swapi.tech/api/planets/" + uid)
    const data = await response.json()
    setData(data.result.properties)
}

export const getVehicle = async (uid, setData) => {
    const response = await fetch("https://www.swapi.tech/api/vehicles/" + uid)
    const data = await response.json()
    setData(data.result.properties)
}

