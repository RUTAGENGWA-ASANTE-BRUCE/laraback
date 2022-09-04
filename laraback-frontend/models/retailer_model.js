import {Schema,model,models} from 'mongoose'

const retailer_schema =new Schema({
    added:String,
    cashback:String,
    conditions:String,
    date_added:String,
    deal_of_week:String,
    description:String,
    end_date:String,
    featured:String,
    image:String,
    image_120x60:String,
    image_300x100:String,
    image_I:String,
    image_II:String,
    image_III:String,
    image_original:String,
    is_profile_completed:String,
    meta_description:String,
    meta_keywords:String,
    network_id:String,
    old_cashback:String,
    popular_retailer:String,
    program_id:String,
    retailer_slug:String,
    sort_order:String,
    status:String,
    time_left:String,
    title:String,
    top_retailer:String,
    url:String,
    visits:Number,
})

const retailer=models.retailers || model('retailers',retailer_schema)

export default retailer;