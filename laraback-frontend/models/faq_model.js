import {Schema,model,models} from 'mongoose'
const faq_schema =new Schema({
    "Title":{type:String,default:""},
    "Category":{type:String,default:""},
    "Sort Order":{type:String,default:""},
},
{timestamps:true})

const faq=models.faqs || model('faqs',faq_schema)

export default faq;