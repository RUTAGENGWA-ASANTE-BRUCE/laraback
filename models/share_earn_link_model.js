import {Schema,model,models} from 'mongoose'
const share_earn_link_schema =new Schema({
    "User":{type:String,default:null},
  "Code":{type:String,default:null},
  "Store":{type:String,default:null},
  "Clicks":{type:String,default:null},
  "Earnings":{type:String,default:null},
},
{timestamps:true})

const share_earn_link=models.share_earn_links || model('share_earn_links',share_earn_link_schema)

export default share_earn_link;