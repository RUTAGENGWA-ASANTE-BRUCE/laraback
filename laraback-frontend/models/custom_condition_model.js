import {Schema,model,models} from 'mongoose'
const custom_condition_schema =new Schema({
    "Store":{type:String,default:""},
    "Minimun Order Amount":{type:Number,default:0},
    "Cashback Amount":{type:Number,default:0},
    "Start Date":{type:String,default:""},
    "End Date":{type:String,default:""},
    "Enabled":{type:String,default:""},
    "Priority":{type:String,default:""},
},
{timestamps:true})

const custom_condition=models.custom_conditions || model('custom_conditions',custom_condition_schema)

export default custom_condition;