import {Schema,model,models} from 'mongoose'

const transaction_schema =new Schema({
    amount:Number,
    click_id:String,
    created:String,
    full_commision:String,
    last_process_date:String,
    network_id:String,
    payment_details:String,
    payment_method:String,
    payment_type:String,
    process_date:String,
    program_id:String,
    reason:String,
    reference_id:String,
    retailer:String,
    status:String,
    transaction_date:String,
    updated:String,
    user_commision:String,
    user_id:String,
})

const transaction=models.transactions || model('transactions',transaction_schema)

export default transaction;