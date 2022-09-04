import {Schema,model,models} from 'mongoose'

const retailer_to_country_schema =new Schema({
    category_id:String,
    category_on_top:String,
    country_id:String,
    retailer_id:String,
})

const retailer_to_country=models.retailer_to_country || model('retailer_to_country',retailer_to_country_schema)

export default retailer_to_country;