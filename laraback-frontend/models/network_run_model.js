import {Schema,model,models} from 'mongoose'
const network_run_schema =new Schema({
    "Network":String,
  "Type":String,
  "Entries":String,
  "Start Time":String,
  "End Time":String,
},
{timestamps:true})

const network_run=models.network_runs || model('network_runs',network_run_schema)

export default network_run;