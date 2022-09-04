import {Schema,model,models} from 'mongoose'

const wp_post_schema =new Schema({
    comment_count:Number,
    comment_status:String,
    guid:String,
    menu_order:String,
    ping_status:String,
    pinged:String,
    post_author:String,
    post_content:String,
    post_content_filtered:String,
    post_date:String,
    post_date_gmt:String,
    post_excerpt:String,
    post_mime_type:String,
    post_modified:String,
    post_modified_gmt:String,
    post_name:String,
    post_parent:String,
    post_password:String,
    post_status:String,
    post_title:String,
    post_type:String,
    to_ping:String,
})

const wp_post=models.wp_posts || model('wp_posts',wp_post_schema)

export default wp_post;