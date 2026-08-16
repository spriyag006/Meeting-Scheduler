const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

        title: {
            type: String,
            required: true,
            trim: true
        },

        meetingDate: {
            type: String,
            required: true
        },

        meetingTime: {
            type: String,
            required: true
        },

        location: {
            type: String,
            trim: true
        },

        description: {
            type: String,
            trim: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Meeting", meetingSchema);