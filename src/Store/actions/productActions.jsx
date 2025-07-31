import axios from "axios";
import {getproducts} from '../Reducers/productReducer'

export const asyncgetproducts= ()=> async (dispatch, getstate)=>{
    try{
        const response= await axios.get('https://fakestoreapi.com/products');
        //here the data of the products is synchronous
        //console.log(response.data);
        dispatch(getproducts(response.data));
    }
    catch (error){
        console.log(error);
    }
}