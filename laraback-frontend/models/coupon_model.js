import {Schema,model,models} from 'mongoose'
const coupon_schema =new Schema({
    "added":String,
    "code":String,
    "coupon_end_date":String,
    "description":String,
    "end_date":String,
    "exclusive":String,
    "link":String,
    "retailer_id":String,
    "sort_order":String,
    "start_date":String,
    "status":String,
    "title":String,
    "trending_sale":String,
    "user_id":String,
    "viewed":String,
},
{timestamps:true})

const coupon=models.coupons || model('coupons',coupon_schema)

export default coupon;