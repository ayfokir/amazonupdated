
export const initialState = {
  basket: [],
  user: null,
  orders: []
};
 // below "state" is app state its initial value is the above one=>(initialState )
 // below the "reducer" function is update the stae and return the new one.
const reducer = ( state, action ) => // action, click
{
  //below the state is previous state.
    // console.log( action );  
    // console.log(state)
  switch ( action.type ) // Adamache (even handling) new 
  {
    case "ADD_TO_BASKET":  
      return {
       ...state, // megemeria yeneberew state ykebelale(keep yeneberewun not delete)
        basket: [ ...state.basket, action.item ], // addis kemeta add yadergal
      };
    
    case "EMPTY_BASKET":
      return {
        ...state,
         orders: [...state.basket],
         basket: []
      };
    
    case 'REMOVE_FROM_BASKET':
      const index = state.basket.findIndex( ( basketItem ) => basketItem.id === action.id );
      let newBasket = [ ...state.basket ]; // yeneberewun
      if ( index >= 0 )
      {
        newBasket.splice(index, 1) // delete from the data layer
      }
      // else
      // {
      //   console.warn( `cannot remove product id ${ action.id } as it is not in basket` );
      // }
      return {
         ...state,
        basket: newBasket,
      }
    case 'SET__USER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }

}
export default reducer;



















