import {Schema,model,models} from 'mongoose'
const store_category_schema =new Schema({
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

const store_category=models.store_categories || model('store_categories',store_category_schema)

export default store_category;