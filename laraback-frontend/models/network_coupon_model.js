import {Schema,model,models} from 'mongoose'
const network_coupon_schema =new Schema({
    "Network Id":String,
    "Title":String,
    "Initialize":String,
    "Exclusive":String,
},
{timestamps:true})

const network_coupon=models.network_coupons || model('network_coupons',network_coupon_schema)

export default network_coupon;