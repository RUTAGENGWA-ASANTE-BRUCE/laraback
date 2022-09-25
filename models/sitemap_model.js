import {Schema,model,models} from 'mongoose'
const sitemap_schema =new Schema({
    "Module":{type:String,default:null},
    "Slug":{type:String,default:null},
    "Frequency":{type:String,default:null},
    "Priority":{type:String,default:null},
    "Enabled":{type:String,default:null},
},
{timestamps:true})

const sitemap=models.sitemaps || model('sitemaps',sitemap_schema)

export default sitemap;