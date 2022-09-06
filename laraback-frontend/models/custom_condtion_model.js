import {Schema,model,models} from 'mongoose'
const custom_condition_schema =new Schema({
    "Store":String,
    "Minimun Order Amount":Number,
    "Cashback Amount":Number,
    "Start Date":String,
    "End Date":String,
    "Enabled":String,
    "Priority":String,
},
{timestamps:true})

const custom_condition=models.custom_conditions || model('custom_conditions',custom_condition_schema)

export default custom_condition;