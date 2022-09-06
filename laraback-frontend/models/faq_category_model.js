import {Schema,model,models} from 'mongoose'
const faq_category_schema =new Schema({
    'Title':String,
    'link':String,
},
{timestamps:true})

const faq_category=models.faq_categories || model('faq_categories',faq_category_schema)

export default faq_category;