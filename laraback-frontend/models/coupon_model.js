import {Schema,model,models} from 'mongoose'
const coupon_schema =new Schema({
    "Title":String,
    "Coupon End Date":String,
    "Description":String,
    "Link":String,
    "Store Id":String,
    "Code":String,
    "Status":String,
    "trending_sale":String,
    "viewed":String,
},
{timestamps:true})

const coupon=models.coupons || model('coupons',coupon_schema)

export default coupon;