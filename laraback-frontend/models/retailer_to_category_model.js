import {Schema,model,models} from 'mongoose'
const retailer_to_category_schema =new Schema({
    "category_url":String,
    "description":String,
    "meta_description":String,
    "meta_keywords":String,
    "name":String,
    "parent_id":String,
    "show_in_menu":String,
    "slug":String,
    "sort_order":String,
},
{timestamps:true})

const retailer_to_category=models.retailer_to_categories || model('retailer_to_categories',retailer_to_category_schema)

export default retailer_to_category;