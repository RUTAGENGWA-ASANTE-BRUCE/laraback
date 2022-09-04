import {Schema,model,models} from 'mongoose'

const wp_termmeta_schema =new Schema({
    meta_key:String,
    meta_value:String,
})

const wp_termmeta=models.wp_termmeta || model('wp_termmeta',wp_termmeta_schema)

export default wp_termmeta;