import {Schema,model,models} from 'mongoose'

const email_template_schema =new Schema({
    email_message:String,
    email_name:String,
    email_subject:String,
    language:String,
    modified:String,
})

const email_template=models.email_templates || model('email_templates',email_template_schema)

export default email_template;