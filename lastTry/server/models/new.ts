import * as mongoose from 'mongoose';

// const newSchema = new mongoose.Schema({
//     name: String,
//     weight: Number,
//     age: Number
// });

const newSchema = new mongoose.Schema({
    "created_at": String,
    "title": String,
    "url": String,
    "author": String,
    "points": Number,
    "story_text": String,
    "comment_text": String,
    "num_comments": Number,
    "story_id": Number,
    "story_title": String,
    "story_url": String,
    "parent_id": Number,
    "created_at_i": Number,
    "_tags": [String],
    "objectID": Number,
    "_highlightResult": {
        "author": {
            "value": String,
            "matchLevel": String,
            "matchedWords": [String]
        },
        "comment_text": {
            "value": String,
            "matchLevel": String,
            "fullyHighlighted": Boolean,
            "matchedWords": [String]
        },
        "story_title": {
            "value": String,
            "matchLevel": String,
            "matchedWords": [String]
        },
        "story_url": {
            "value": String,
            "matchLevel": String,
            "matchedWords": [String]
        }
    }
});


const New = mongoose.model('Cat', newSchema);

export default New;
