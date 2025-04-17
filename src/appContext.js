// // store/appContext.js

// export const initialState = {
//     favorites: [],
//   };
  
//   export const reducer = (state, action) => {
//     switch (action.type) {
//       case "ADD_FAVORITE":
//         return {
//           ...state,
//           favorites: [...state.favorites, action.payload],
//         };
//       case "REMOVE_FAVORITE":
//         return {
//           ...state,
//           favorites: state.favorites.filter(
//             (item) => item.uid !== action.payload.uid
//           ),
//         };
//       default:
//         return state;
//     }
//   };
  

//   addFavorite: (item) => {
//     dispatch({ type: "ADD_FAVORITE", payload: item });
//   },
//   removeFavorite: (item) => {
//     dispatch({ type: "REMOVE_FAVORITE", payload: item });
//   },