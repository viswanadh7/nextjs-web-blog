import { connectDB } from '@/db/config';
import BlogSchema from '@/db/schema/blogSchema';
import { TBlog } from '@/types/blog';

const getLatestBlogs = async (): Promise<TBlog[]> => {
    connectDB();
    let data = [];
    try {
        data = await BlogSchema.find();
    } catch (error) {
        console.log(error);
    }
    return data;
};

const getBlogById = async (id: string): Promise<TBlog> => {
    connectDB();
    let data;
    try {
        data = await BlogSchema.findById(id);
    } catch (error) {
        console.log(error);
    }
    return data;
};

export default { getLatestBlogs, getBlogById };
