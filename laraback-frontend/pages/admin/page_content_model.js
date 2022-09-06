import {Schema,model,models} from 'mongoose'
const page_content_schema =new Schema({
    "description":String,
    "language":String,
    "link_title":String,
    "meta_description":String,
    "meta_keywords":String,
    "modified":String,
    "name":String,
    "page_location":String,
    "page_url":String,
    "status":String
},
{timestamps:true})

const page_content=models.page_contents || model('page_contents',page_content_schema)

export default page_content;