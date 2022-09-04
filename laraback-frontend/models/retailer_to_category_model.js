import {Schema,model,models} from 'mongoose'

const retailer_to_category_schema =new Schema({
    category_id:String,
    category_on_top:String,
    country_id:String,
    retailer_id:String,

})

const retailer_to_category=models.retailer_to_category || model('retailer_to_category',retailer_to_category_schema)

export default retailer_to_category;