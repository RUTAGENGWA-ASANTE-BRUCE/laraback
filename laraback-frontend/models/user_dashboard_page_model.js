import {Schema,model,models} from 'mongoose'
const user_dashboard_page_schema =new Schema({
    "Module":{type:String,default:""},
    "title":{type:String,default:""},
    "Menu Name":{type:String,default:""},
    "Sort Order":{type:String,default:""},
    "Enabled":{type:String,default:""},
},
{timestamps:true})

const user_dashboard_page=models.user_dashboard_pages || model('user_dashboard_pages',user_dashboard_page_schema)

export default user_dashboard_page;