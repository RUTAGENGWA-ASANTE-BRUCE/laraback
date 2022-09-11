import {Schema,model,models} from 'mongoose'
const country_master_schema =new Schema({
    "Name":{type:String,default:""},
    "Dial Code":{type:String,default:""},
    "Code":{type:String,default:""},
    "Enable OTP":{type:String,default:""},
    "Enabled":{type:String,default:""},
},
{timestamps:true})

const country_master=models.country_masters || model('country_masters',country_master_schema)

export default country_master;