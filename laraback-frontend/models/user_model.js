import {Schema,model,models} from 'mongoose'
const user_schema =new Schema({
    "User Id":String,
    "Email":String,
    "Referral Percent":String,
    "Can Share Earn":String,
    "Banned":String,
    "Can Refer And Earn":String,
    "Cashback":String
},
{timestamps:true})

const user=models.users || model('users',user_schema)

export default user;