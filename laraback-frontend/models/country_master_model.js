import {Schema,model,models} from 'mongoose'
const country_master_schema =new Schema({
    "Name":{type:String,default:null},
    "Dial Code":{type:String,default:null},
    "Code":{type:String,default:null},
    "Enable OTP":{type:String,default:null},
    "Enabled":{type:String,default:null},
},
{timestamps:true})

const country_master=models.country_masters || model('country_masters',country_master_schema)

export default country_master;