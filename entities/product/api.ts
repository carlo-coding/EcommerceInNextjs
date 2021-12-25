import { Product } from "./types";
import axios from "axios";
import { GOOGLE_SHEETS_URL } from "@env";
import Papa from "papaparse";

const parseProductObject = (product: any) => ({...product, price: Number(product.price)}) 

export default {
    list: async (): Promise<Product[]>=> axios
    .get(GOOGLE_SHEETS_URL, {responseType: "blob"})
    .then(({data})=>new Promise<Product[]>((resolve, reject)=> {

        Papa.parse(data, {
            header: true, 
            complete: results=> resolve(results.data.map(parseProductObject) as Product[]),
            error: (err)=> reject(err.message)
        });

    }))
}