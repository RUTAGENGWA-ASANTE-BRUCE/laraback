import {Schema,model,models} from 'mongoose'
const share_earn_link_schema =new Schema({
    "User":{type:String,default:""},
  "Code":{type:String,default:""},
  "Store":{type:String,default:""},
  "Clicks":{type:String,default:""},
  "Earnings":{type:String,default:""},
},
{timestamps:true})

const share_earn_link=models.share_earn_links || model('share_earn_links',share_earn_link_schema)

export default share_earn_link;