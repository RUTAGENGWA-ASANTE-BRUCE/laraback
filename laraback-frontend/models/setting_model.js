import {Schema,model,models} from 'mongoose'
const store_schema =new Schema({
  "Title":{type:String,default:""},
  "Slug":{type:String,default:""},
},
{timestamps:true})

const store=models.stores || model('stores',store_schema)

export default store;