import {Schema,model,models} from 'mongoose'

const report_schema =new Schema({
    added:String,
    report:String,
    reporter_id:String,
    retailer_id:String,
    user_id:String,
    viewed:String,
})

const report=models.reports || model('reports',report_schema)

export default report;