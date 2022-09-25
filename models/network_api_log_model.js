import {Schema,model,models} from 'mongoose'
const network_api_log_schema =new Schema({
    "Network":{type:String,default:null},
    "Endpoint":{type:String,default:null},
    "Request Method":{type:String,default:null},
    "Url":{type:String,default:null},
    "Response Status":{type:String,default:null},
},
{timestamps:true})

const network_api_log=models.network_api_logs || model('network_api_logs',network_api_log_schema)

export default network_api_log;