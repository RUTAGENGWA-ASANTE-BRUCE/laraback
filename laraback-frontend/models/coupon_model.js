import {Schema,model,models} from 'mongoose'
const coupon_schema =new Schema({
    "Title":{type:String,default:""},
    "Coupon End Date":{type:String,default:""},
    "Description":{type:String,default:""},
    "Link":{type:String,default:""},
    "Store Id":{type:String,default:""},
    "Code":{type:String,default:""},
    "Status":{type:String,default:""},
    "trending_sale":{type:String,default:""},
    "viewed":{type:String,default:""},
},
{timestamps:true})

const coupon=models.coupons || model('coupons',coupon_schema)

export default coupon;