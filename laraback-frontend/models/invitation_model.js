import {Schema,model,models} from 'mongoose'

const invitation_schema =new Schema({
    date_sent:String,
    sent_date:String,
    status:String,
    user_id:String,
})

const invitation=models.invitations || model('invitations',invitation_schema)

export default invitation;