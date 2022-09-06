import {Schema,model,models} from 'mongoose'
const network_api_log_schema =new Schema({
    "Network":String,
    "Endpoint":String,
    "Request Method":String,
    "Url":String,
    "Response Status":String,
},
{timestamps:true})

const network_api_log=models.network_api_logs || model('network_api_logs',network_api_log_schema)

export default network_api_log;