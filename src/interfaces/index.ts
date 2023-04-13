export interface Item {
   id?: number;
   saleId?: number;
   description: string;
}


export interface Sale {
   id?: number;
   title: string;
   description: string;
   items?: Item[];
}