import {Schema,model,models} from 'mongoose'

const wp_term_taxonomy_schema =new Schema({
    count:Number,
    description:String,
    parent:String,
    taxonomy:String,
    term_id:String,
})

const wp_term_taxonomy=models.wp_term_taxonomy || model('wp_term_taxonomy',wp_term_taxonomy_schema)

export default wp_term_taxonomy;