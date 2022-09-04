import {Schema,model,models} from 'mongoose'

const news_schema =new Schema({
    added:String,
    news_description:String,
    news_title:String,
    review_id:String,
    status:String,
})

const news=models.news || model('news',news_schema)

export default news;