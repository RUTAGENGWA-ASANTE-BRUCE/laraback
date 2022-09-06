import {Schema,model,models} from 'mongoose'
const manual_sales_import_schema =new Schema({
    "Network Id":String,
    "Network Campaign":String,
    "Transaction Id":String,
    "Sale Date":String,
    "Base Commission":String,
    "Currency":String,
    "Status":String,
    "Aff Sub1":String,
},
{timestamps:true})

const manual_sales_import=models.manual_sales_imports || model('manual_sales_imports',manual_sales_import_schema)

export default manual_sales_import;