import {Schema,model,models} from 'mongoose'
const affiliate_network_schema =new Schema({
    "Program Id": Number,
    "Name": String,
    "Csv_format": String,
    "Post_back":String,
    "Confirmeds": String,
    "Pendings": String,
    "Declineds": String,
    "Website":String,
    "Image": String,
    "Last_csv_upload": String,
    "Enabled":String
},
{timestamps:true})

const affiliate_network=models.affiliate_networks || model('affiliate_networks',affiliate_network_schema)

export default affiliate_network;