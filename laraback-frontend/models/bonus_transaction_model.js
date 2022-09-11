import {Schema,model,models} from 'mongoose'
const bonus_transaction_schema =new Schema({
    "User":{type:String,default:""},
    "Bonus":{type:String,default:""},
    "Amount":{type:Number,default:0},
    "Awarded On":{type:String,default:""},
    "Expires On":{type:String,default:""},
    "Status":{type:String,default:""},

},
{timestamps:true})

const bonus_transaction=models.bonus_transactions || model('bonus_transactions',bonus_transaction_schema)

export default bonus_transaction;