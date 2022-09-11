import {Schema,model,models} from 'mongoose'
const payment_mode_schema =new Schema({
    "Name":{type:String,default:""},
    "Minimun Amount":{type:Number,default:0},
    "Minimum Amount First":{type:String,default:""},
    "Cashback Allowed":{type:String,default:""},
    "Reward Allowed":{type:String,default:""},
    "Image":{type:String,default:""},
    "Account Name":{type:String,default:""},
    "Payment Speed":{type:String,default:""},
    "Enabled":{type:String,default:""},

},
{timestamps:true})

const payment_mode=models.payment_modes || model('payment_modes',payment_mode_schema)

export default payment_mode;