import {Schema,model,models} from 'mongoose'

const message_schema =new Schema({
    created:String,
    is_admin:String,
    message:String,
    status:String,
    subject:String,
    user_id:String,
    viewed:String,
})

const message=models.messages || model('messages',message_schema)

export default message;