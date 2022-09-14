import {Schema,model,models} from 'mongoose'
const store_schema =new Schema({
  "Name":{type:String,default:null},
  "Slug":{type:String,default:null},
  "Logo":{type:String,default:null},
  "Homepage":{type:String,default:null},
  "Domain Name":{type:String,default:null},
  "DeepLink":{type:String,default:null},
  "Cashback Enabled":{type:String,default:null},
  "Cashback Percent":{type:String,default:null},
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
  "Network Campaign Id":{type:String,default:null},
  "Ghost":{type:String,default:null},
  "H1":{type:String,default:null},
  "H2":{type:String,default:null},
  "Meta Title":{type:String,default:null},
  "Meta Desc":{type:String,default:null},
  "Meta Kw":{type:String,default:null},
  "Terms Tod":{type:String,default:null},
  "Terms Not Todo":{type:String,default:null},
  "About":{type:String,default:null},
  "Tips":{type:String,default:null},
  "Visits":{
    type:Number,
    default:0,
  },
},
{timestamps:true})

const store=models.stores || model('stores',store_schema)

export default store;