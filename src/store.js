export const initialStore=()=>{
  return {
    characters: [],
    planets: [],
    vehicles: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){

      case 'set_characters':
        return {
          ...store,
          characters: action.payload
        }
        case 'set_planets':
          return {
            ...store,
            planets: action.payload
          }
          case 'set_vehicles':
            return {
              ...store,
              vehicles: action.payload
            }


    default:
      throw Error('Unknown action.');
  }    
}
 
