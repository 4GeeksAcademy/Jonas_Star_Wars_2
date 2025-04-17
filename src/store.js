export const initialStore=()=>{
  return {
    characters: [],
    planets: [],
    vehicles: [],
    favorites: []
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

            
          case 'handle_favorites':
            if(store.favorites.includes(action.payload)){
              const new_favorites = store.favorites.filter(favorite => {
                return favorite != action.payload
              }) 
              return {
                ...store,favorites: new_favorites
              }
            } else {
                return {
                  ...store,
                  favorites: [...store.favorites, action.payload]
                }
  
            }
            

    default:
      throw Error('Unknown action.');
  }    
}
 
