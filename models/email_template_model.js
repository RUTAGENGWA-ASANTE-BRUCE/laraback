import {Schema,model,models} from 'mongoose'
const email_template_schema =new Schema({
    "Name":{type:String,default:null},
    "Subject":{type:String,default:null},
    "Template":{type:String,default:null},
    "View Name":{type:String,default:null},
},
{timestamps:true})

const email_template=models.email_templates || model('email_templates',email_template_schema)

export default email_template;