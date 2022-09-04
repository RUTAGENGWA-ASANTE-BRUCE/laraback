import {Schema,model,models} from 'mongoose'

const favorite_schema =new Schema({
    added:String,
    description:String,
    end_date:String,
    retailer_id:String,
    sort_order:String,
    start_date:String,
    status:String,
    title:String,
    trending_sale:String,
    user_id:String,
    viewed:String,
})

const favorite=models.favorites || model('favorites',favorite_schema)

export default favorite;