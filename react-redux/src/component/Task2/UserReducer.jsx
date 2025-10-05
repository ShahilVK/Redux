const UserReducer = (state = {name:""}, action)=>{
    switch(action.type){
        case "SET_NAME":
            return {name: action.payload};
        default:
            return state;    
    }
}
export default UserReducer