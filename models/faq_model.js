import {Schema,model,models} from 'mongoose'
const faq_schema =new Schema({
    "Title":{type:String,default:null},
    "Category":{type:String,default:null},
    "Sort Order":{type:String,default:null},
},
{timestamps:true})

const faq=models.faqs || model('faqs',faq_schema)

export default faq;