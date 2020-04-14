const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Name is Required"
        },

        exercise_type: {
            type: String,
            trim: true,
            required: "Enter a exercise type"
        },

        weight: {
            type: Number,
        },

        sets: {
            type: Number,
        },

        reps: {
            type: Number,
        },

        duration: {
            type: Number,
            required: "how long did the workout take you"
        },

        distance: {
            type: Number,
        },
    }]

});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;