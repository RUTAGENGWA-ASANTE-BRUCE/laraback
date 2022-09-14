import {Schema,model,models} from 'mongoose'
const payment_mode_schema =new Schema({
    "Name":{type:String,default:null},
    "Minimun Amount":{type:Number,default:0},
    "Minimum Amount First":{type:String,default:null},
    "Cashback Allowed":{type:String,default:null},
    "Reward Allowed":{type:String,default:null},
    "Image":{type:String,default:null},
    "Account Name":{type:String,default:null},
    "Payment Speed":{type:String,default:null},
    "Enabled":{type:String,default:null},

},
{timestamps:true})

const payment_mode=models.payment_modes || model('payment_modes',payment_mode_schema)

export default payment_mode;