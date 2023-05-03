import { createContext, useContext, useReducer } from "react"
import { programReducer } from "../reducers/programReducer";

const initialState = {
    programList:[]
}

const ProgramContext = createContext(initialState);

export const ProgramProvider = ({children})=>{

    const [state,dispatch] = useReducer(programReducer,initialState);
    
    const addToFav = (program)=>{
        const updatedFavs = state.programList.concat(program);
        dispatch({
            type:"ADD_TO_FAV",
            payload:{
                programs:updatedFavs
            }
        })
    }
    const removeFromFav = (program)=>{
        const updatedFavs = state.programList.filter((current)=>current.id!==program.id);
        dispatch({
            type:"REMOVE_FROM_FAV",
            payload:{
                programs:updatedFavs
            }
        })
    }

    const value = {
        programlist:state.programList,
        addToFav,
        removeFromFav
    };;

    return(
        <ProgramContext.Provider value={value}>
            {children}
        </ProgramContext.Provider>
    );
}

export const useFav = ()=>{
    const context = useContext(ProgramContext);
    return context;
}