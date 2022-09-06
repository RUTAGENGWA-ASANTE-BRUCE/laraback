import {Schema,model,models} from 'mongoose'
const share_earn_link_schema =new Schema({
    "User":String,
  "Code":String,
  "Store":String,
  "Clicks":String,
  "Earnings":String,
},
{timestamps:true})

const share_earn_link=models.share_earn_links || model('share_earn_links',share_earn_link_schema)

export default share_earn_link;