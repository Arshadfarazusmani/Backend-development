import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const VideoSchema=new mongoose.Schema(
    {
        videoFile:{
            type:String, // cloudinary video url .
            required:true,
        },
        thumbNail:{
            type:String, // cloudinary image url .
            required:true,
        },
        title:{
            type:String,
            required:true,
            trim:true,
        },
        description:{
            type:String,
            required:true,
            
        },
        duration:{
            type:Number,
            required:true, 
        },
        views:{
            type:Number,
            default:0,
        },
        IsPublished:{
            type:Boolean,
            default:true,
        },
        owner:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"

        },
    },
    {timestamps:true});

    VideoSchema.plugin(mongooseAggregatePaginate) // for pagination.

    
export const Video=mongoose.model("Video",VideoSchema);