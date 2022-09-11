import {Schema,model,models} from 'mongoose'
const store_category_schema =new Schema({
    "category_url":{type:String,default:""},
    "description":{type:String,default:""},
    "meta_description":{type:String,default:""},
    "meta_keywords":{type:String,default:""},
    "name":{type:String,default:""},
    "parent_id":{type:String,default:""},
    "show_in_menu":{type:String,default:""},
    "slug":{type:String,default:""},
    "sort_order":{type:String,default:""},
},
{timestamps:true})

const store_category=models.store_categories || model('store_categories',store_category_schema)

export default store_category;