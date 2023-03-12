import mongoose from "mongoose";

const schema = mongoose.Schema;

export const ContactSchema = new schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});
