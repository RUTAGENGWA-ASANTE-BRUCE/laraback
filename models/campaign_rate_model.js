import {Schema,model,models} from 'mongoose'
const campaign_rate_schema =new Schema({
    'Network':String,
    "Network Campagn Id":{type:String,default:null},
    "Campaign Id":{type:String,default:null},
    "Name":{type:String,default:null},
    "Type":{type:String,default:null},
    "Amount":{type:Number,default:0},
    "Base Amount":{type:Number,default:0},
    "Currency":{type:String,default:null},
},
{timestamps:true})

const campaign_rate=models.campaign_rates || model('campaign_rates',campaign_rate_schema)

export default campaign_rate;