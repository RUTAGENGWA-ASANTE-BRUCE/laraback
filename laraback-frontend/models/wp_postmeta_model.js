import {Schema,model,models} from 'mongoose'

const wp_postmeta_schema =new Schema({
    meta_key:Number,
    meta_value:String,
    post_id:String,
})

const wp_postmeta=models.wp_postmeta || model('wp_postmeta',wp_postmeta_schema)

export default wp_postmeta;