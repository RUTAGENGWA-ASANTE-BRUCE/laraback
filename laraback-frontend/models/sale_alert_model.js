import {Schema,model,models} from 'mongoose'

const sale_alert_schema =new Schema({
    cashsale_alert_id:String,
    link:String,
    retailer_id:String,
    title:String,
})

const sale_alert=models.sale_alerts || model('sale_alerts',sale_alert_schema)

export default sale_alert;