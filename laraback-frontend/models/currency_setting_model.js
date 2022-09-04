import {Schema,model,models} from 'mongoose'

const currency_setting_schema =new Schema({
    name:String,
    rate:String,
    status:String,
    symbol:String,
})

const currency_setting=models.currency_settings || model('currency_settings',currency_setting_schema)

export default currency_setting;