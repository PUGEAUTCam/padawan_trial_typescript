import type { Item, Sale } from '@/interfaces';
import axios from 'axios';

let API = `http://localhost:3000`

export const API_ROUTES = {
   sales: `${API}/sales/`,
   items: `${API}/items/`,
   sales_items: `${API}/sales/?_embed=items`,
}

//Recup all the sales with items
export const getAllSales = () =>
   axios.get(API_ROUTES.sales_items)
      .catch((error) => error.response)


//Post new sale and items 
export const createNewSale = (sale: Sale) => {
   return new Promise((resolve, reject) => {
      axios.post(API_ROUTES.sales, sale)
         .then((res) => resolve(res))
         .catch((error) => reject(error.response));
   });
};

export const createNewItem = (item: Item, id: Number) => {
   return new Promise((resolve, reject) => {
      axios.post(API_ROUTES.items, { saleId: id, description: item.description })
         .then((res) => resolve(res))
         .catch((error) => reject(error.response));
   });
};
// //Search
// export const searchSales = (search) =>
//    axios.get(API_ROUTES.sales, { params: { q: search } })
//       .catch((error) => error.response)

// export const searchItem = (search) =>
//    axios.get(API_ROUTES.items, { params: { q: search } })
//       .catch((error) => error.response)