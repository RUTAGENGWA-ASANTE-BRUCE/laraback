import {Schema,model,models} from 'mongoose'
const bonus_transaction_schema =new Schema({
    "User":{type:String,default:null},
    "Bonus":{type:String,default:null},
    "Amount":{type:Number,default:0},
    "Awarded On":{type:String,default:null},
    "Expires On":{type:String,default:null},
    "Status":{type:String,default:null},

},
{timestamps:true})

const bonus_transaction=models.bonus_transactions || model('bonus_transactions',bonus_transaction_schema)

export default bonus_transaction;