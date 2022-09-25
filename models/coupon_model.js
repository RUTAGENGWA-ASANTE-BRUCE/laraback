import {Schema,model,models} from 'mongoose'
const coupon_schema =new Schema({
    "Title":{type:String,default:null},
    "Coupon End Date":{type:String,default:null},
    "Description":{type:String,default:null},
    "Link":{type:String,default:null},
    "Store Id":{type:String,default:null},
    "Code":{type:String,default:null},
    "Status":{type:String,default:null},
    "trending_sale":{type:String,default:null},
    "viewed":{type:String,default:null},
},
{timestamps:true})

const coupon=models.coupons || model('coupons',coupon_schema)

export default coupon;