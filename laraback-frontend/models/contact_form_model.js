import {Schema,model,models} from 'mongoose'
const contact_form_schema =new Schema({
    "Name":{type:String,default:null},
    "Email":{type:String,default:null},
    "Reason":{type:String,default:null},
},
{timestamps:true})

const contact_form=models.contact_forms || model('contact_forms',contact_form_schema)

export default contact_form;