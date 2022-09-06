import {Schema,model,models} from 'mongoose'
const footer_schema =new Schema({
    'Title':String,
  'Footer Type':String,
  'Sort Order':String,
},
{timestamps:true})

const footer=models.footers || model('footers',footer_schema)

export default footer;