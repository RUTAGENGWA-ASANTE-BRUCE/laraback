import {Schema,model,models} from 'mongoose'
const store_cashback_schema =new Schema({
    "Store":{type:String,default:""},
    "User Id":{type:String,default:""},
    "Amount":{type:String,default:""},
    "Product Id":{type:String,default:""},
},
{timestamps:true})

const store_cashback=models.store_cashback || model('store_cashback',store_cashback_schema)

export default store_cashback;