
import React from 'react';
import type { BlogPost } from '../types';

interface BlogPostCardProps {
    post: BlogPost;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ post }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h3 className="text-2xl font-heading font-bold mb-3">{post.title}</h3>
            <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
            <a href={post.link} className="font-semibold text-accent hover:underline self-start">Read More &rarr;</a>
        </div>
    );
};

export default BlogPostCard;
