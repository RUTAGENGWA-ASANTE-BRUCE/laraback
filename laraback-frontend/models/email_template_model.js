import {Schema,model,models} from 'mongoose'
const email_template_schema =new Schema({
    "Name":String,
    "Subject":String,
    "Template":String,
    "View Name":String,
},
{timestamps:true})

const email_template=models.email_templates || model('email_templates',email_template_schema)

export default email_template;