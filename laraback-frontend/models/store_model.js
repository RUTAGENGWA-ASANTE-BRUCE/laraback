import {Schema,model,models} from 'mongoose'
const store_schema =new Schema({
  "Name":String,
  "Slug":String,
  "Logo":String,
  "Homepage":String,
  "Domain Name":String,
  "DeepLink":String,
  "Cashback Enabled":String,
  "Cashback Percent":String,
  "Cashback Type":String,
  "Tracking Speed":String,
  "Confirm Duration":String,
  "Is Claimable":String,
  "Is Shearable":String,
  "Exclude Sitemap":String,
  "Network":{
    type:String,
    default:"no"
  },
  "Network Campaign Id":String,
  "Ghost":String,
  "H1":String,
  "H2":String,
  "Meta Title":String,
  "Meta Desc":String,
  "Meta Kw":String,
  "Terms Tod":String,
  "Terms Not Todo":String,
  "About":String,
  "Tips":String,
  "Visits":{
    type:Number,
    default:0,
  }
},
{timestamps:true})

const store=models.stores || model('stores',store_schema)

export default store;