import {Schema,model,models} from 'mongoose'
const store_schema =new Schema({
  "Name":{type:String,default:""},
  "Slug":{type:String,default:""},
  "Logo":{type:String,default:""},
  "Homepage":{type:String,default:""},
  "Domain Name":{type:String,default:""},
  "DeepLink":{type:String,default:""},
  "Cashback Enabled":{type:String,default:""},
  "Cashback Percent":{type:String,default:""},
  "Cashback Type":{type:String,default:""},
  "Tracking Speed":{type:String,default:""},
  "Confirm Duration":{type:String,default:""},
  "Is Claimable":{type:String,default:""},
  "Is Shearable":{type:String,default:""},
  "Exclude Sitemap":{type:String,default:""},
  "Network":{
    type:String,
    default:"no"
  },
  "Network Campaign Id":{type:String,default:""},
  "Ghost":{type:String,default:""},
  "H1":{type:String,default:""},
  "H2":{type:String,default:""},
  "Meta Title":{type:String,default:""},
  "Meta Desc":{type:String,default:""},
  "Meta Kw":{type:String,default:""},
  "Terms Tod":{type:String,default:""},
  "Terms Not Todo":{type:String,default:""},
  "About":{type:String,default:""},
  "Tips":{type:String,default:""},
  "Visits":{
    type:Number,
    default:0,
  },
},
{timestamps:true})

const store=models.stores || model('stores',store_schema)

export default store;