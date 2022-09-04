import {Schema,model,models} from 'mongoose'

const setting_schema =new Schema({
    setting_key:String,
    setting_value:String,
    status:String,
})

const setting=models.settings || model('settings',setting_schema)

export default setting;