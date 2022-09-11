import {Schema,model,models} from 'mongoose'
const campaign_schema =new Schema({
    "Network":{type:String,default:""},
    "Network Campagin Id":{type:String,default:""},
    "Campaign Name":{type:String,default:""},
    "Campaign Status":{type:String,default:""},
    "Status":{type:String,default:""},
},
{timestamps:true})

const campaign=models.campaigns || model('campaigns',campaign_schema)

export default campaign;