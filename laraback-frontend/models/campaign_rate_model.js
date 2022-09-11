import {Schema,model,models} from 'mongoose'
const campaign_rate_schema =new Schema({
    'Network':String,
    "Network Campagn Id":{type:String,default:""},
    "Campaign Id":{type:String,default:""},
    "Name":{type:String,default:""},
    "Type":{type:String,default:""},
    "Amount":{type:Number,default:0},
    "Base Amount":{type:Number,default:0},
    "Currency":{type:String,default:""},
},
{timestamps:true})

const campaign_rate=models.campaign_rates || model('campaign_rates',campaign_rate_schema)

export default campaign_rate;