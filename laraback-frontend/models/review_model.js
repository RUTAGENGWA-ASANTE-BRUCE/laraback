import {Schema,model,models} from 'mongoose'

const review_schema =new Schema({
    added:String,
    rating:String,
    retailer_id:String,
    status:String,
    user_id:String,
})

const review=models.reviews || model('reviews',review_schema)

export default review;