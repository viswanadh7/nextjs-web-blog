import { TBlog } from '@/types/blog';

const BlogCard = ({
    title,
    description,
    tags,
    imageUrl,
}: Omit<TBlog, '_id'>) => {
    return (
        <div className="p-5 bg-black border border-gray-800 rounded-lg">
            <figure className="overflow-hidden rounded-lg mb-1">
                <img
                    src={imageUrl}
                    width={100}
                    height={100}
                    alt="image"
                    className="object-cover w-full object-center aspect-video bg-gray-400"
                />
            </figure>
            <p className="text-2xl text-pretty mt-2 text-gray-50 hover:underline">
                {title}
            </p>
            <p className="line-clamp-3 text-sm text-gray-50 opacity-50 mt-1 group-hover:opacity-90 transition-opacity duration-300">
                {description}
            </p>
            <ul className="flex flex-wrap gap-3 mt-2">
                {tags?.map((tag, index) => (
                    <li
                        key={index}
                        className="text-xs text-gray-50/50 border p-1.5 min-w-12 text-center rounded"
                    >
                        {tag}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogCard;
