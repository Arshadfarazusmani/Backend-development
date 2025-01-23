import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema= new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            lowercase:true,
            trim:true,
            unique:true,
            index:true, //for faster and optimise search with in the database.
},
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,

        },

        fullname:{
            type:String,
            required:true,
            trim:true,
        },

        avatar:{
            type:String,  // cloudinary image url -> cloud based image storage service.
            required:true,

            
        },
        coverImage:{
            type:String, // cloudinary image url .
            
        },
        watchHistory:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Video",
            },
        ],
        password:{
            type:String,
            required:true,
        },
        refreshToken:{
            type:String,
        },
    }
    ,{timestamps:true});

    UserSchema.pre("save", async function (next) {
        if(!this.ismodified("password")){
            return next();
        }
        this.password= await bcrypt.hash(this.password,10);
        
    })

    UserSchema.methods.comparePassword= async function(password){
        return await bcrypt.compare(password,this.password);  // compare the password with the hashed password. 
        // if the password is correct then it will return true otherwise false. bcrypt.compare() returns boolean value. true or false.
    }

    UserSchema.methods.generateAccessToken= function(){
        jwt.sign({
            _id:this._id,
            username:this.username,
            email:this.email,
            fullname:this.fullname,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
        expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
        })
    };
    UserSchema.methods.generateRefreshToken= function(){
        jwt.sign({
            _id:this._id,
        
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
        expiresIn:process.env.REFRESH_TOKEN_EXPIRY,
        }
    )
    };

    // both are jwt token generation functions.
    // Access token is used to authenticate the user.
    // Refresh token is used to refresh the access token.



export const User=mongoose.model("User",UserSchema); 