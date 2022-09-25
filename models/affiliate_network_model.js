import {Schema,model,models} from 'mongoose'
const affiliate_network_schema =new Schema({
    "Program Id": Number,
    "Name": {type:String,default:null},
    "Csv_format": {type:String,default:null},
    "Post_back":{type:String,default:null},
    "Confirmeds": {type:String,default:null},
    "Pendings": {type:String,default:null},
    "Declineds": {type:String,default:null},
    "Website":{type:String,default:null},
    "Image": {type:String,default:null},
    "Last_csv_upload": {type:String,default:null},
    "Enabled":{type:String,default:null}
},
{timestamps:true})

const affiliate_network=models.affiliate_networks || model('affiliate_networks',affiliate_network_schema)

export default affiliate_network;