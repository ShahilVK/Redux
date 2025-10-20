import { fetcherror, fetchrequest, fetchsuccess } from "./Thunkreducer"
import axios from "axios"




  const Fetchpost = ()=>{
    return async (dispatch)=>{
        dispatch(fetchrequest());

        try{

            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            const titles = response.data.map((post)=> post.title);
            dispatch(fetchsuccess(titles));
        } catch (error) {
            dispatch(fetcherror(error.message))
        }

        }   
    }


export default Fetchpost;