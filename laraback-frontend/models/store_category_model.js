import {Schema,model,models} from 'mongoose'
const store_category_schema =new Schema({
    "category_url":{type:String,default:null},
    "description":{type:String,default:null},
    "meta_description":{type:String,default:null},
    "meta_keywords":{type:String,default:null},
    "name":{type:String,default:null},
    "parent_id":{type:String,default:null},
    "show_in_menu":{type:String,default:null},
    "slug":{type:String,default:null},
    "sort_order":{type:String,default:null},
},
{timestamps:true})

const store_category=models.store_categories || model('store_categories',store_category_schema)

export default store_category;