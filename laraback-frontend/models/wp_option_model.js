import {Schema,model,models} from 'mongoose'

const wp_option_schema =new Schema({
    autoload:Number,
    option_name:String,
    option_value:String,
})

const wp_option=models.wp_options || model('wp_options',wp_option_schema)

export default wp_option;