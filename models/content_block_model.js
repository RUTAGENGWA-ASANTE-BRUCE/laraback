import {Schema,model,models} from 'mongoose'
const content_block_schema =new Schema({
    'Name':String,
  'Purpose':String,
},
{timestamps:true})

const content_block=models.content_blocks || model('content_blocks',content_block_schema)

export default content_block;