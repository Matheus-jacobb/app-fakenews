
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const schema = new Schema({
    nameNews:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    updateDate:{
        type:String,
        require:true,
    },
    linkNews:{
        type:String,
        require:true,
    },
    likes:{
        type:Number,
        require:true
    }
})

const NewsSchema = mongoose.model('news',schema);
export {NewsSchema};