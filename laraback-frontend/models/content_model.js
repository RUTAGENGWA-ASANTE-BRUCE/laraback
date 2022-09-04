import {Schema,model,models} from 'mongoose'

const content_schema =new Schema({
    description:String,
    language:String,
    link_title:String,
    meta_description:String,
    meta_keywords:String,
    modified:String,
    name:String,
    page_location:String,
    page_url:String,
    status:String,
})

const content=models.content || model('content',content_schema)

export default content;