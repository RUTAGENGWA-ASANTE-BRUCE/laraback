import {Schema,model,models} from 'mongoose'
const page_content_schema =new Schema({
    "Title":{type:String,default:null},
    "Slug":{type:String,default:null},
    "Exclude Sitempa":{type:String,default:null},
    "Status":{type:String,default:null},
    "Visits":{type:String,default:null},
},
{timestamps:true})

const page_content=models.page_contents || model('page_contents',page_content_schema)

export default page_content;