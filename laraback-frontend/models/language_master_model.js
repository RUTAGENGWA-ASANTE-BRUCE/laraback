import {Schema,model,models} from 'mongoose'
const language_master_schema =new Schema({
    "Id":{type:String,default:null},
    "Name":{type:String,default:null},
    "Code":{type:String,default:null},
    "Enabled":{type:String,default:null},
},
{timestamps:true})

const language_master=models.language_masters || model('language_masters',language_master_schema)

export default language_master;