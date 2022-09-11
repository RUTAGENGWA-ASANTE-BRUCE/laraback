import {Schema,model,models} from 'mongoose'
const user_schema =new Schema({
    "Email":{type:String,default:""},
    "Password":{type:String,default:""},
    "Referral Percent":{default:0,type:Number},
    "Can Share Earn":{default:"yes",type:String},
    "Banned":{default:"no",type:String},
    "Can Refer And Earn":{default:"yes",type:String},
    "Cashback":{default:0,type:Number}
},
{timestamps:true})

const user=models.users || model('users',user_schema)

export default user;