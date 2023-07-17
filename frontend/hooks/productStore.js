import axios from 'axios';
import { REACT_APP_BACKEND_API } from './config';

let products = [];
let listeners = [];

export const productsStore = {
    addProduct(data) {
        let newProduct = {
            id: data.id ? data.id : products.length+1,
            name: data.name,
            shortDescription: data.shortDescription,
            description: data.description,
            price: data.price,
            stock: data.stock,
            categoryId: data.categoryId
        }
        products = [...products, newProduct]
        emitChange()
    },
    subscribe(listener) {
        listeners = [...listeners, listener];
        return()=> {
            listeners = listeners.filter(l => l !== listener)
        }
    },
    getSnapshot(){
        return products;
    }
}

function emitChange() {
    for (let listener of listeners) {
      listener();
    }
  }


const api = REACT_APP_BACKEND_API;

//Get Products from Product table
axios.get(`${api}/api/product`)
    .then(response => response.data.data)
    .then(json => {json.forEach(item=>productsStore.addProduct(item))})
    .catch(error=> {throw error.message});