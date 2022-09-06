import {Schema,model,models} from 'mongoose'
const seo_url_redirect_schema =new Schema({
    "Old Url":String,
    "New Url":String,
    "Status":String,
},
{timestamps:true})

const seo_url_redirect=models.seo_url_redirects || model('seo_url_redirects',seo_url_redirect_schema)

export default seo_url_redirect;