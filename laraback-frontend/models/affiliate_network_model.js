import {Schema,model,models} from 'mongoose'
const affiliate_network_schema =new Schema({
    added:String,
    confirmeds:String,
    declineds:String,
    image:String,
    last_csv_upload:String,
    network_name:String,
    pendings:String,
    post_back:String,
    program_id:String,
    status:String,
    website:String,
})

const affiliate_network=models.affiliate_networks || model('affiliate_networks',affiliate_network_schema)

export default affiliate_network;