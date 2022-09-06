import {Schema,model,models} from 'mongoose'
const campaign_schema =new Schema({
    "Network":String,
    "Network Campagin Id":String,
    "Campaign Name":String,
    "Campaign Status":String,
    "Status":String,
},
{timestamps:true})

const campaign=models.campaigns || model('campaigns',campaign_schema)

export default campaign;