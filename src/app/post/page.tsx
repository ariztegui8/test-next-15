import React from 'react'

type Post = {
    id: number;
    title: string;
    body: string;
};

async function fetchPosts(): Promise<Post[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
}

const PagePost = async () => {

    const posts = await fetchPosts();

    return (
        <div className='p-6'>
            <h1>Posts</h1>
            <div className='grid grid-cols-5 gap-6'>
                {posts.map((post) => (
                    <div className='bg-gray-50 rounded-lg shadow-md p-6' key={post.id}>
                        <h2 className='text-lg font-medium mb-2'>{post.title}</h2>
                        <p className='text-sm '>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PagePost