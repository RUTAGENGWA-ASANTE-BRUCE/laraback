import {Schema,model,models} from 'mongoose'

const post_back_setting_schema =new Schema({
    field_value:String,
    setting_key:String,
    setting_value:String,
    status:String,
})

const post_back_setting=models.post_back_settings || model('post_back_settings',post_back_setting_schema)

export default post_back_setting;