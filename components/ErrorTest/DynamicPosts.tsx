import { BlogPost, IBlogPost } from './BlogPost'

interface IDynamicPosts {
    loading: boolean
    posts: Array<IBlogPost>
}
export const DynamicPosts = ({ loading, posts }: IDynamicPosts) => {
    return (
        <div
            style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
                padding: '5rem',
            }}
        >
            {loading ? (
                <p> loading ... </p>
            ) : (
                posts.map((post: IBlogPost, index: number) => (
                    <BlogPost
                        key={`blogpost-${index}`}
                        owner={post.owner}
                        text={post.text}
                        id={post.id}
                        image={post.image}
                        likes={post.likes}
                        publishDate={post.publishDate}
                        tags={post.tags}
                    />
                ))
            )}
        </div>
    )
}
