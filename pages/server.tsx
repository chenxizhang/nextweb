// 这个页面是用service-side rendering的方式渲染的
import { NextPageContext } from "next";

export default function Page(props: { id: string }) {
    return <div>Post {props.id}</div>
}

export async function getServerSideProps(context: NextPageContext) {


    return {
        props: {
            id: context.req?.headers.cookie || "none"
        }
    }
}