import {Schema,model,models} from 'mongoose'
const network_api_log_schema =new Schema({
    "Network":{type:String,default:""},
    "Endpoint":{type:String,default:""},
    "Request Method":{type:String,default:""},
    "Url":{type:String,default:""},
    "Response Status":{type:String,default:""},
},
{timestamps:true})

const network_api_log=models.network_api_logs || model('network_api_logs',network_api_log_schema)

export default network_api_log;