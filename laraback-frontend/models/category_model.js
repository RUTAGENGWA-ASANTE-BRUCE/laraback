import {Schema,model,models} from 'mongoose'

const category_model =new Schema({
    category_url:String,
    description:String,
    meta_description:String,
    meta_keywords:String,
    name:String,
    parent_id:String,
    show_in_menu:String,
    slug:String,
    sort_order:String,
})

const category=models.categories || model('categories',category_model)

export default category;