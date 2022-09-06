import {Schema,model,models} from 'mongoose'
const bonus_transaction_schema =new Schema({
    "User":String,
    "Bonus":String,
    "Amount":Number,
    "Awarded On":String,
    "Expires On":String,
    "Status":String,

},
{timestamps:true})

const bonus_transaction=models.bonus_transactions || model('bonus_transactions',bonus_transaction_schema)

export default bonus_transaction;