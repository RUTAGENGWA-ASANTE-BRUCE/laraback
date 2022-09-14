import {Schema,model,models} from 'mongoose'
const user_dashboard_page_schema =new Schema({
    "Module":{type:String,default:null},
    "title":{type:String,default:null},
    "Menu Name":{type:String,default:null},
    "Sort Order":{type:String,default:null},
    "Enabled":{type:String,default:null},
},
{timestamps:true})

const user_dashboard_page=models.user_dashboard_pages || model('user_dashboard_pages',user_dashboard_page_schema)

export default user_dashboard_page;