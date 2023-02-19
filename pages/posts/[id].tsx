export default (props: { id: string }) => {
    return <div>Post {props.id}</div>
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } }
        ],
        fallback: false
    }
}

export async function getStaticProps(context: { params: { id: string } }) {
    return {
        props: {
            id: context.params.id
        }
    }
}
