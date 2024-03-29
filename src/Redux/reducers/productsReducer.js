import { ActionTypes } from "../constants/action-type";

const intialState ={
    products:[]
}

export const productsReducer = (state =intialState,{type,payload})=>{
    switch (type){
        case ActionTypes.SET_PRODUCTS:
            return {...state,products:payload};
        default:
            return state;    
    }
}

export const selectedProductsReducer = (state ={},{type,payload})=>{
    switch (type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state,...payload};
        case ActionTypes.REMOVE_SELECTED_PRODUCTS:
            return {};
        default:
            return state;    
    }
};