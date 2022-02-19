import { User } from "../auth/user.model";
import { Product } from "../products/product.model";

export interface Order{
    product: Product,
    customerID: string;
}