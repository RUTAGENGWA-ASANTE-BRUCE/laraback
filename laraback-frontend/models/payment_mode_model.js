import {Schema,model,models} from 'mongoose'
const payment_mode_schema =new Schema({
    "Name":String,
    "Minimun Amount":Number,
    "Minimum Amount First":String,
    "Cashback Allowed":String,
    "Reward Allowed":String,
    "Image":String,
    "Account Name":String,
    "Payment Speed":String,
    "Enabled":String,

},
{timestamps:true})

const payment_mode=models.payment_modes || model('payment_modes',payment_mode_schema)

export default payment_mode;