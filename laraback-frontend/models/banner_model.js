import {Schema,model,models} from 'mongoose'

const banner_model =new Schema({
    bypass_script:String,
    image:String,
    link:String,
    retailer_id:String,
    sort_order:String,
})

const banner=models.banners || model('banners',banner_model)

export default banner;