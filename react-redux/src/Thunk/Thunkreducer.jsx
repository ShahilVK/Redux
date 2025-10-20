
const initialstate = {
    loading: false,
    data:[],
    error:""
}



 export const reducer = (state = initialstate, action) =>{
    switch(action.type){
        case "FETCH-REQUEST":
            return({...state, loading:true});
        case "FETCH-SUCCESS":
            return({...state, loading:false, data:action.payload, error:""}) 
        case "FETCH-ERROR":
            return({...state, loading:false, data:[], error:action.payload}) 
        default:
            return state;          
    }
}






 export const fetchrequest = ()=>{
    return{
        type: "FETCH-REQUEST"
    }
}

export const fetchsuccess = (data)=>{
    return{
        type:"FETCH-SUCCESS",
        payload: data

    }
}

export const fetcherror = (error)=>{
    return{
        type:"FETCH-ERROR",
        payload: error
    }
}