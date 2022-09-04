import {Schema,model,models} from 'mongoose'

const wp_link_schema =new Schema({
    comment_agent:Number,
    comment_approved:String,
    comment_author:String,
    comment_author_email:String,
    comment_author_IP:String,
    comment_author_url:String,
    comment_content:String,
    comment_date:String,
    comment_date_gmt:String,
    comment_karma:String,
    comment_parent:String,
    comment_post_ID:String,
    comment_type:String,
    user_id:String,
})

const wp_link=models.wp_links || model('wp_links',wp_link_schema)

export default wp_link;