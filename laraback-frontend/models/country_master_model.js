import {Schema,model,models} from 'mongoose'
const country_master_schema =new Schema({
    "Name":String,
    "Dial Code":String,
    "Code":String,
    "Enable OTP":String,
    "Enabled":String,
},
{timestamps:true})

const country_master=models.country_masters || model('country_masters',country_master_schema)

export default country_master;