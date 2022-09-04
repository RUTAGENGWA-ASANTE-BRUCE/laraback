import {Schema,model,models} from 'mongoose'

const wp_commentmeta_schema =new Schema({
    comment_id:String,
    meta_key:String,
    meta_value:String,
})

const wp_commentmeta=models.wp_commentmeta || model('wp_commentmeta',wp_commentmeta_schema)

export default wp_commentmeta;