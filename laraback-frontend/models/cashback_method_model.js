import {Schema,model,models} from 'mongoose'

const cashback_method_schema =new Schema({
    address:String,
    cashback_method:String,
    city:String,
    country:String,
    paypal_email:String,
    state:String,
    user_id:String,
    venmo_username:String,
    zip:String,
})

const cashback_method=models.cashback_methods || model('cashback_methods',cashback_method_schema)

export default cashback_method;