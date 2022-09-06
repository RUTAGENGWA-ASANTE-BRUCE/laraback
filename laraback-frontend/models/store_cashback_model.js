import {Schema,model,models} from 'mongoose'
const store_cashback_schema =new Schema({
    "address":String,
  "cashback_method":String,
  "city":String,
  "country":String,
  "paypal_email":String,
  "state":String,
  "user_id":String,
  "venmo_username":String,
  "zip":String,
},
{timestamps:true})

const store_cashback=models.store_cashbacks || model('store_cashbacks',store_cashback_schema)

export default store_cashback;