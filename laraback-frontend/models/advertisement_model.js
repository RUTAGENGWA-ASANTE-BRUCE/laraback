import {Schema,model,models} from 'mongoose'

const advertisement_schema =new Schema({
    image_name:String,
    image_url:String,
    link:String,
    retailer_id:String,
    title:String,
})

const advertisement=models.advertisements || model('advertisements',advertisement_schema)

export default advertisement;