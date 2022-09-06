import {Schema,model,models} from 'mongoose'
const deals_category_schema =new Schema({
    'name':String,
    'is featured':String,
    'visits':Number,
},
{timestamps:true})

const deals_category=models.deals_categories || model('deals_categories',deals_category_schema)

export default deals_category;