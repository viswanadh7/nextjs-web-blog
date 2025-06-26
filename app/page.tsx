import BlogCard from '@/components/BlogCard';
import BlogActions from '@/server-actions/BlogActions';
import Link from 'next/link';

const Home = async () => {
    const latestPosts = await BlogActions.getLatestBlogs();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {latestPosts?.map((blog, index) => (
                <Link key={index} href={`blog/${blog._id}`}>
                    <BlogCard
                        title={blog.title}
                        description={blog.description}
                        tags={blog.tags}
                        imageUrl={blog.imageUrl}
                    />
                </Link>
            ))}
        </div>
    );
};

export default Home;
