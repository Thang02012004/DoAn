import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://ThangNguyen:2200005054@cluster0.qmabm.mongodb.net/Thang').then(()=>console.log("DB Connected"));

}