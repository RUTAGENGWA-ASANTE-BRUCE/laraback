import {Schema,model,models} from 'mongoose'

const wp_usermeta_schema =new Schema({
    meta_key:String,
    meta_value:String,
    user_id:String,  
})

const wp_usermeta=models.wp_usermeta || model('wp_usermeta',wp_usermeta_schema)

export default wp_usermeta;