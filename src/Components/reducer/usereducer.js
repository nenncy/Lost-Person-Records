export const initialstate = null;

export const reducer = (state, action) => {

    if(action.type === "ADMIN") {
        return action.payload ;
    } 
    return state;

}

export const reducer2 = (state, action) => {
    if(action.type === "USER") {
       return action.payload;
    }
    return state;
} 