import {Schema,model,models} from 'mongoose'
const manual_sales_import_schema =new Schema({
    "Network Id":{type:String,default:null},
    "Network Campaign":{type:String,default:null},
    "Transaction Id":{type:String,default:null},
    "Sale Date":{type:String,default:null},
    "Base Commission":{type:String,default:null},
    "Currency":{type:String,default:null},
    "Status":{type:String,default:null},
    "Aff Sub1":{type:String,default:null},
},
{timestamps:true})

const manual_sales_import=models.manual_sales_imports || model('manual_sales_imports',manual_sales_import_schema)

export default manual_sales_import;