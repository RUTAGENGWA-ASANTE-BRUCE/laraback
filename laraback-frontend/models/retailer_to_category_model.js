import {Schema,model,models} from 'mongoose'
const retailer_to_category_schema =new Schema({
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

const retailer_to_category=models.retailer_to_categories || model('retailer_to_categories',retailer_to_category_schema)

export default retailer_to_category;