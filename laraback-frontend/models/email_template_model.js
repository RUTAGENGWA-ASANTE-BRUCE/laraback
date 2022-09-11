import {Schema,model,models} from 'mongoose'
const email_template_schema =new Schema({
    "Name":{type:String,default:""},
    "Subject":{type:String,default:""},
    "Template":{type:String,default:""},
    "View Name":{type:String,default:""},
},
{timestamps:true})

const email_template=models.email_templates || model('email_templates',email_template_schema)

export default email_template;