export const getCharacters = async (dispatch) => {
    const response = await fetch("https://www.swapi.tech/api/people/")
    const data = await response.json()
    dispatch({type: "set_characters", payload: data.results})
}
