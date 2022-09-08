import {Schema,model,models} from 'mongoose'
const faq_schema =new Schema({
    "Title":String,
    "Category":String,
    "Sort Order":String,
},
{timestamps:true})

const faq=models.faqs || model('faqs',faq_schema)

export default faq;