import {Schema,model,models} from 'mongoose'
const custom_condition_schema =new Schema({
    "Store":{type:String,default:null},
    "Minimun Order Amount":{type:Number,default:0},
    "Cashback Amount":{type:Number,default:0},
    "Start Date":{type:String,default:null},
    "End Date":{type:String,default:null},
    "Enabled":{type:String,default:null},
    "Priority":{type:String,default:null},
},
{timestamps:true})

const custom_condition=models.custom_conditions || model('custom_conditions',custom_condition_schema)

export default custom_condition;