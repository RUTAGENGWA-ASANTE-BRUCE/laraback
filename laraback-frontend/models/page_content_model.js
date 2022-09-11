import {Schema,model,models} from 'mongoose'
const page_content_schema =new Schema({
    "description":{type:String,default:""},
    "language":{type:String,default:""},
    "link_title":{type:String,default:""},
    "meta_description":{type:String,default:""},
    "meta_keywords":{type:String,default:""},
    "modified":{type:String,default:""},
    "name":{type:String,default:""},
    "page_location":{type:String,default:""},
    "page_url":{type:String,default:""},
    "status":{type:String,default:""}
},
{timestamps:true})

const page_content=models.page_contents || model('page_contents',page_content_schema)

export default page_content;