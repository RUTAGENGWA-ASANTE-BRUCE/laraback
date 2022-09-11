import {Schema,model,models} from 'mongoose'
const network_run_schema =new Schema({
    "Network":{type:String,default:""},
  "Type":{type:String,default:""},
  "Entries":{type:String,default:""},
  "Start Time":{type:String,default:""},
  "End Time":{type:String,default:""},
},
{timestamps:true})

const network_run=models.network_runs || model('network_runs',network_run_schema)

export default network_run;