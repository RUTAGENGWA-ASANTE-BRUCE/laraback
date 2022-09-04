import {Schema,model,models} from 'mongoose'

const message_answer_schema =new Schema({
    answer:String,
    answer_date:String,
    is_admin:String,
    message_id:String,
    user_id:String,
    viewed:String,
})

const message_answer=models.message_answers || model('message_answers',message_answer_schema)

export default message_answer;