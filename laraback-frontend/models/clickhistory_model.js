import {Schema,model,models} from 'mongoose'

const clickhistory_schema =new Schema({
    added:String,
    click_date:String,
    date_sub:String,
    retailer_id:String,
    user_id:String,
})

const clickhistory=models.clickhistory || model('clickhistory',clickhistory_schema)

export default clickhistory;