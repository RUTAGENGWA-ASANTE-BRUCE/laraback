import {Schema,model,models} from 'mongoose'
const network_coupon_schema =new Schema({
    "Network Id":{type:String,default:null},
    "Title":{type:String,default:null},
    "Initialize":{type:String,default:null},
    "Exclusive":{type:String,default:null},
},
{timestamps:true})

const network_coupon=models.network_coupons || model('network_coupons',network_coupon_schema)

export default network_coupon;