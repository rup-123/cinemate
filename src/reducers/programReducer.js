export const programReducer = (state,action)=>{
    const {type,payload} = action;

    switch(type){

        case "ADD_TO_FAV":
            return{...state, programList:payload.programs }
        case "REMOVE_FROM_FAV":
            return{...state, programList:payload.programs }

        default:
            throw new Error("No Case Found in CartReducer")
    }
}