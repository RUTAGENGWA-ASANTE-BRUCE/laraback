import {Schema,model,models} from 'mongoose'
const page_content_schema =new Schema({
    "Title":{type:String,default:""},
    "Slug":{type:String,default:""},
    "Exclude Sitempa":{type:String,default:""},
    "Status":{type:String,default:""},
    "Visits":{type:String,default:""},
},
{timestamps:true})

const page_content=models.page_contents || model('page_contents',page_content_schema)

export default page_content;