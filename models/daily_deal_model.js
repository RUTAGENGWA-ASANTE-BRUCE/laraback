import {Schema,model,models} from 'mongoose'
const daily_deal_schema =new Schema({
    'title':String,
    'store':String,
    'offer price':String,
    'is featured':String,
    'expiry date':String,
    'clicks':String,
    'visits':Number,
    'status':String,
    'updated at':String,
},
{timestamps:true})

const daily_deal=models.daily_deals || model('daily_deals',daily_deal_schema)

export default daily_deal;