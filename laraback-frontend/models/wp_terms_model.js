import {Schema,model,models} from 'mongoose'

const wp_terms_schema =new Schema({
    name:String,
    slug:String,
    term_group:String,
})

const wp_terms=models.wp_terms || model('wp_terms',wp_terms_schema)

export default wp_terms;