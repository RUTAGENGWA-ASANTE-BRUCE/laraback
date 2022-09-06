import {Schema,model,models} from 'mongoose'
const contact_form_schema =new Schema({
    "Name":String,
    "Email":String,
    "Reason":String,
},
{timestamps:true})

const contact_form=models.contact_forms || model('contact_forms',contact_form_schema)

export default contact_form;