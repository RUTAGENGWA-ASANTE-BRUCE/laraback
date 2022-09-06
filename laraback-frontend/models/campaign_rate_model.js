import {Schema,model,models} from 'mongoose'
const campaign_rate_schema =new Schema({
    'Network':String,
    "Network Campagn Id":String,
    "Campaign Id":String,
    "Name":String,
    "Type":String,
    "Amount":Number,
    "Base Amount":Number,
    "Currency":String,
},
{timestamps:true})

const campaign_rate=models.campaign_rates || model('campaign_rates',campaign_rate_schema)

export default campaign_rate;