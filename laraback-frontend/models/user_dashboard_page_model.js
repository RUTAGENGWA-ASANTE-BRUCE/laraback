import {Schema,model,models} from 'mongoose'
const user_dashboard_page_schema =new Schema({
    "Module":String,
    "title":String,
    "Menu Name":String,
    "Sort Order":String,
    "Enabled":String,
},
{timestamps:true})

const user_dashboard_page=models.user_dashboard_pages || model('user_dashboard_pages',user_dashboard_page_schema)

export default user_dashboard_page;