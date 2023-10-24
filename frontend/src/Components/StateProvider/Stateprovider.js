import { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();//here prpare the data layer
export const StateProvider = ( { reducer, initialState, children } ) => (
    <StateContext.Provider value= { useReducer( reducer, initialState ) }>
        
    { children }  {/* childrenochu access endenorachew*/}     
    </StateContext.Provider>  
)
export const useStatevalue = () => useContext(StateContext)     

//StateProvider: wanawun App wrap yemeyaderg and  every child data endeyagegne mebte yemeste. and
// data layer provide yadergal  

//initialState: ye wanawun App initial
//useStatevalue: wode data layeru push and pull endenareg yemeyaderg




