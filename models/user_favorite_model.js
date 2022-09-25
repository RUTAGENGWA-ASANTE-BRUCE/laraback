import {Schema,model,models} from 'mongoose'
const user_favorite_schema =new Schema({
    "Id":{type:String,default:null},
    "Name":{type:String,default:null},
    "Users List":{type:String,default:null},
},
{timestamps:true})

const user_favorite=models.user_favorites || model('user_favorites',user_favorite_schema)

export default user_favorite;