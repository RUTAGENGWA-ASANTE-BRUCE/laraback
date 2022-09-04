import {Schema,model,models} from 'mongoose'

const country_schema =new Schema({
    code:String,
    name:String,
    link_title:String,
    signup:String,
    status:String,
    user_id:String,
})

const country=models.countries || model('countries',country_schema)

export default country;