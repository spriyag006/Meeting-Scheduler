const express = require("express");
const Meeting = require("../models/Meeting");

const router = express.Router();

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

        const meeting = new Meeting({

            userId,

            title,

            meetingDate,

            meetingTime,

            location,

            description

        });

        await meeting.save();


        res.status(201).json({

            message: "Meeting created successfully",

            meeting

        });


    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server error"

        });

    }

});



router.get("/:userId", async (req, res) => {

    try {

        const meetings = await Meeting.find({

            userId: req.params.userId

        }).sort({

            meetingDate: 1

        });


        res.json(meetings);


    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server error"

        });

    }

});

router.put("/:id", async (req, res) => {

    try {

                const updatedMeeting =
            await Meeting.findByIdAndUpdate(

                req.params.id,

                req.body,

                {
                    returnDocument: 'after',
                    runValidators: true
                }

            );


        if (!updatedMeeting) {

            return res.status(404).json({

                message: "Meeting not found"

            });

        }


        res.json({

            message: "Meeting updated successfully",

            meeting: updatedMeeting

        });


    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server error"

        });

    }

});


router.delete("/:id", async (req, res) => {

    try {

        const deletedMeeting =
            await Meeting.findByIdAndDelete(
                req.params.id
            );


        if (!deletedMeeting) {

            return res.status(404).json({

                message: "Meeting not found"

            });

        }


       res.status(200).json({
            message: "Meeting deleted successfully"

        });


    } catch (error) {

        console.error(error);

        res.status(500).json({

            message: "Server error"

        });

    }

});


module.exports = router;