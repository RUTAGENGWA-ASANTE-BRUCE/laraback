import {Schema,model,models} from 'mongoose'
const sitemap_schema =new Schema({
    "Module":{type:String,default:""},
    "Slug":{type:String,default:""},
    "Frequency":{type:String,default:""},
    "Priority":{type:String,default:""},
    "Enabled":{type:String,default:""},
},
{timestamps:true})

const sitemap=models.sitemaps || model('sitemaps',sitemap_schema)

export default sitemap;