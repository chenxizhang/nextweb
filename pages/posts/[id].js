export default function Post({ id, title }) {
    return (
        <>
            <h1>{title}</h1>
            <p>This is the blog post content.</p>
        </>
    )
}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const posts = [
        { id: 1, title: 'First post' },
        { id: 2, title: 'Second post' },
        { id: 3, title: 'Third post' }
    ]

    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => `/posts/${post.id}`)
    console.log(paths)

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const post = {
        id: params.id,
        title: 'First post'
    }

    // Pass post data to the page via props
    return { props: { post } }
}