const express = require("express");
const Meeting = require("../models/Meeting");

const router = express.Router();


// =====================================================
// CREATE MEETING
// POST /meetings
// =====================================================

router.post("/", async (req, res) => {

    try {

        const {
            userId,
            title,
            meetingDate,
            meetingTime,
            location,
            description
        } = req.body;


        // Validate required fields

        if (
            !userId ||
            !title ||
            !meetingDate ||
            !meetingTime
        ) {

            return res.status(400).json({

                message:
                    "User, title, date and time are required"

            });

        }


        // Create meeting

        const meeting = new Meeting({

            userId: userId,

            title: title,

            meetingDate: meetingDate,

            meetingTime: meetingTime,

            location: location || "",

            description: description || ""

        });


        // Save to MongoDB

        await meeting.save();


        // Send response

        res.status(201).json({

            message: "Meeting created successfully",

            meeting: meeting

        });

    }
    catch (error) {

        console.error(
            "CREATE MEETING ERROR:",
            error
        );

        res.status(500).json({

            message: "Server error"

        });

    }

});



// =====================================================
// GET USER'S MEETINGS
// GET /meetings/:userId
// =====================================================

router.get("/:userId", async (req, res) => {

    try {

        const userId = req.params.userId;


        console.log(
            "Loading meetings for user:",
            userId
        );


        const meetings =
            await Meeting.find({

                userId: userId

            }).sort({

                meetingDate: 1

            });


        console.log(
            "Meetings found:",
            meetings.length
        );


        res.status(200).json(meetings);

    }
    catch (error) {

        console.error(
            "GET MEETINGS ERROR:",
            error
        );

        res.status(500).json({

            message: "Server error"

        });

    }

});



// =====================================================
// UPDATE MEETING
// PUT /meetings/:id
// =====================================================

router.put("/:id", async (req, res) => {

    try {

        const meetingId =
            req.params.id;


        const {
            title,
            meetingDate,
            meetingTime,
            location,
            description
        } = req.body;


        console.log(
            "Updating meeting:",
            meetingId
        );


        console.log(
            "Update data:",
            req.body
        );


        // Validate required fields

        if (
            !title ||
            !meetingDate ||
            !meetingTime
        ) {

            return res.status(400).json({

                message:
                    "Title, date and time are required"

            });

        }


        // Update meeting

        const updatedMeeting =
            await Meeting.findByIdAndUpdate(

                meetingId,

                {

                    title: title,

                    meetingDate: meetingDate,

                    meetingTime: meetingTime,

                    location: location || "",

                    description: description || ""

                },

                {

                    new: true,

                    runValidators: true

                }

            );


        // Meeting not found

        if (!updatedMeeting) {

            return res.status(404).json({

                message: "Meeting not found"

            });

        }


        console.log(
            "Updated meeting:",
            updatedMeeting
        );


        // Send updated meeting

        res.status(200).json({

            message:
                "Meeting updated successfully",

            meeting:
                updatedMeeting

        });

    }
    catch (error) {

        console.error(
            "UPDATE MEETING ERROR:",
            error
        );

        res.status(500).json({

            message:
                "Server error while updating meeting"

        });

    }

});



// =====================================================
// DELETE MEETING
// DELETE /meetings/:id
// =====================================================

router.delete("/:id", async (req, res) => {

    try {

        const meetingId =
            req.params.id;


        console.log(
            "Deleting meeting:",
            meetingId
        );


        // Delete from MongoDB

        const deletedMeeting =
            await Meeting.findByIdAndDelete(
                meetingId
            );


        // Meeting not found

        if (!deletedMeeting) {

            return res.status(404).json({

                message: "Meeting not found"

            });

        }


        console.log(
            "Deleted meeting:",
            deletedMeeting
        );


        // Success response

        res.status(200).json({

            message:
                "Meeting deleted successfully",

            meeting:
                deletedMeeting

        });

    }
    catch (error) {

        console.error(
            "DELETE MEETING ERROR:",
            error
        );

        res.status(500).json({

            message:
                "Server error while deleting meeting"

        });

    }

});



// =====================================================
// EXPORT ROUTER
// =====================================================

module.exports = router;