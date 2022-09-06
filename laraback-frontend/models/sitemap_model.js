import {Schema,model,models} from 'mongoose'
const sitemap_schema =new Schema({
    "Module":String,
    "Slug":String,
    "Frequency":String,
    "Priority":String,
    "Enabled":String,
},
{timestamps:true})

const sitemap=models.sitemaps || model('sitemaps',sitemap_schema)

export default sitemap;