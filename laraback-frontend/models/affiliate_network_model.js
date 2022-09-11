import {Schema,model,models} from 'mongoose'
const affiliate_network_schema =new Schema({
    "Program Id": Number,
    "Name": String,
    "Csv_format": String,
    "Post_back":{type:String,default:""},
    "Confirmeds": String,
    "Pendings": String,
    "Declineds": String,
    "Website":{type:String,default:""},
    "Image": String,
    "Last_csv_upload": String,
    "Enabled":{type:String,default:""}
},
{timestamps:true})

const affiliate_network=models.affiliate_networks || model('affiliate_networks',affiliate_network_schema)

export default affiliate_network;