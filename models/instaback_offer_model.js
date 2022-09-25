import {Schema,model,models} from 'mongoose'
const instaback_offer_schema =new Schema({
    'title':String,
    'link':String,
    'status':String,
},
{timestamps:true})

const instaback_offer=models.instaback_offers || model('instaback_offers',instaback_offer_schema)

export default instaback_offer;