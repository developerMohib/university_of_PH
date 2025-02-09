import { Schema } from "mongoose";

const studentSchema = new Schema({
    id :{
        type : String,
        require : [true, 'id is mendatory'],
        
    }
})

