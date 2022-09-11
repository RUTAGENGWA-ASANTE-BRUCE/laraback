import {Schema,model,models} from 'mongoose'
const store_cashback_schema =new Schema({
    "Store":String,
    "User Id":String,
    "Amount":String,
    "Product Id":String,
},
{timestamps:true})

const store_cashback=models.store_cashback || model('store_cashback',store_cashback_schema)

export default store_cashback;