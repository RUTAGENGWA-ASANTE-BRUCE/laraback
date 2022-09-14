import {Schema,model,models} from 'mongoose'
const network_run_schema =new Schema({
    "Network":{type:String,default:null},
  "Type":{type:String,default:null},
  "Entries":{type:String,default:null},
  "Start Time":{type:String,default:null},
  "End Time":{type:String,default:null},
},
{timestamps:true})

const network_run=models.network_runs || model('network_runs',network_run_schema)

export default network_run;