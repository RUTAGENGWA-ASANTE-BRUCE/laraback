import {Schema,model,models} from 'mongoose'

const user_schema =new Schema({
    activation_key:Number,
    address:String,
    address2:String,
    block_reason:String,
    city:String,
    country:String,
    created:String,
    email:String,
    fname:String,
    ip:String,
    last_ip:String,
    last_login:String,
    lname:String,
    login_count:String,
    login_session:String,
    newsletter:String,
    password:String,
    phone:String,
    ref_id:String,
    state:String,
    status:String,
    unsubscribe_key:String,
    username:String,
    zip:String,
})

const user=models.users || model('users',user_schema)

export default user;