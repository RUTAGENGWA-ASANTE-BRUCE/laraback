import {Schema,model,models} from 'mongoose'
const manual_sales_import_schema =new Schema({
    "Network Id":{type:String,default:""},
    "Network Campaign":{type:String,default:""},
    "Transaction Id":{type:String,default:""},
    "Sale Date":{type:String,default:""},
    "Base Commission":{type:String,default:""},
    "Currency":{type:String,default:""},
    "Status":{type:String,default:""},
    "Aff Sub1":{type:String,default:""},
},
{timestamps:true})

const manual_sales_import=models.manual_sales_imports || model('manual_sales_imports',manual_sales_import_schema)

export default manual_sales_import;