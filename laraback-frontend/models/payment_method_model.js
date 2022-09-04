import {Schema,model,models} from 'mongoose'

const payment_method_schema =new Schema({
    pmethod_details:String,
    pmethod_title:String,
    payment_method:String,
    status:String,
})

const payment_method=models.payment_methods || model('payment_methods',payment_method_schema)

export default payment_method;