import Link from "next/link"

export default function PostCard ({ post }){
    if (!post.uri) {
        return null; // ou você pode renderizar um fallback
    }

    return (
        <Link href={post.uri} className="card">
            <h3>{post.title} &rarr;</h3>
        </Link>
    )
}