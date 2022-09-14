import {Schema,model,models} from 'mongoose'
const campaign_schema =new Schema({
    "Network":{type:String,default:null},
    "Network Campagin Id":{type:String,default:null},
    "Campaign Name":{type:String,default:null},
    "Campaign Status":{type:String,default:null},
    "Status":{type:String,default:null},
},
{timestamps:true})

const campaign=models.campaigns || model('campaigns',campaign_schema)

export default campaign;