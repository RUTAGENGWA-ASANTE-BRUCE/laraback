import {Schema,model,models} from 'mongoose'
const language_master_schema =new Schema({
    "Id":String,
    "Name":String,
    "Code":String,
    "Enabled":String,
},
{timestamps:true})

const language_master=models.language_masters || model('language_masters',language_master_schema)

export default language_master;