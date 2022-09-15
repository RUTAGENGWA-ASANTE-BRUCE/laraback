import {Schema,model,models} from 'mongoose'
const store_schema =new Schema({
  "Name":{type:String,default:null},
  "Slug":{type:String,default:null},
  "Logo":{type:String,default:null},
  "Url":{type:String,default:null},
  "DeepLink":{type:String,default:null},
  "Cashback Enabled":{type:String,default:null},
  "Cashback Percent":{type:Number,default:null},
  "Cashback Type":{type:String,default:null},
  "Tracking Speed":{type:String,default:null},
  "Confirm Duration":{type:String,default:null},
  "Is Claimable":{type:String,default:null},
  "Is Shearable":{type:String,default:null},
  "Exclude Sitemap":{type:String,default:null},
  "Network":{
    type:String,
    default:"no"
  },
  "Visits":{
    type:Number,
    default:0,
  },
},
{timestamps:true})

const store=models.stores || model('stores',store_schema)

export default store;