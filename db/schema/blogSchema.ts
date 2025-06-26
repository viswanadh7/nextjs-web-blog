'use server';
import mongoose, { Schema } from 'mongoose';

const blogSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    imageUrl: String,
});

const BlogSchema = mongoose.models.blogs || mongoose.model('blogs', blogSchema);
export default BlogSchema;
