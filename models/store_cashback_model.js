import {Schema,model,models} from 'mongoose'
const store_cashback_schema =new Schema({
    "Store":{type:String,default:null},
    "User Id":{type:String,default:null},
    "Amount":{type:String,default:null},
    "Product Id":{type:String,default:null},
},
{timestamps:true})

const store_cashback=models.store_cashback || model('store_cashback',store_cashback_schema)

export default store_cashback;