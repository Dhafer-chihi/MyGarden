import { Schema , model } from 'mongoose'

export interface Product{
  id:string;
  name:string;
  price:number;
  favorite:boolean;
  stars:number;
  imageUrl:string;
  matter:string[];
  tags:string[];
}

export const ProductSchema = new Schema<Product>(
    {
    name : {type:String, required : true},
    price : {type:Number, required : true},
    tags : {type:[String]},
    favorite : {type:Boolean,default : false},
    stars : {type:Number, required : true} ,
    imageUrl : {type:String, required : true},
    matter : {type:[String], required : true},
    },{
        toJSON : {
            virtuals:true
        },
        toObject : {
            virtuals : true
        },
        timestamps : true
    }
);
export const ProductModel = model<Product>('product',ProductSchema);