import {Schema,model,models} from 'mongoose'

const wp_user_schema =new Schema({
    display_name:String,
    user_activation_key:String,
    user_email:String,  
    user_login:String,  
    user_nicename:String,  
    user_pass:String,  
    user_registered:String,  
    user_status:String,  
    user_url:String,  
})

const wp_user=models.wp_users || model('wp_users',wp_user_schema)

export default wp_user;