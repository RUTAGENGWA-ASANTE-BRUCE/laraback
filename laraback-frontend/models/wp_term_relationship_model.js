import {Schema,model,models} from 'mongoose'

const wp_term_relationship_schema =new Schema({
    term_order:Number,
    term_taxonomy_id:String,
})

const wp_term_relationship=models.wp_term_relationships || model('wp_term_relationships',wp_term_relationship_schema)

export default wp_term_relationship;