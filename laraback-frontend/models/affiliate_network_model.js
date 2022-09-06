import {Schema,model,models} from 'mongoose'
const affiliate_network_schema =new Schema({
    "Name":String,
    "Confirm Duration":String,
    "Enabled":String,
    "Default Currnecy":String,
},
{timestamps:true})

const affiliate_network=models.affiliate_networks || model('affiliate_networks',affiliate_network_schema)

export default affiliate_network;