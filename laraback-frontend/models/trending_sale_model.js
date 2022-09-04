import {Schema,model,models} from 'mongoose'

const trending_sale_schema =new Schema({
    created:String,
    description:String,
    retailer_id:String,
    status:String,
    title:String,
})

const trending_sale=models.trending_sales || model('trending_sales',trending_sale_schema)

export default trending_sale;