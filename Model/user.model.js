/**
 * This file contains the schame of the User
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        minLength: 10,
    },
    role: {
        type: String,
        default: "USER"
    },
    password: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true
    },
    userName : {
        type : String
    },
    userAddresses : {
        type : [mongoose.SchemaTypes.ObjectId],
        ref : "Address"
    },
    userOrders : {
        type : [mongoose.SchemaTypes.ObjectId],
        ref : "Order"
    },
    createAt: {
        type: Date,
        default: () => {
            return Date.now();
        },
        immutable: true
    },
    upDateAt: {
        type: Date,
        default: () => {
            return Date.now();
        }
    }
});

module.exports = mongoose.model("User", userSchema);