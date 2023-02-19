import Head from "next/head"
import styles from "@/styles/About.module.css"

export default function About(props: { title: string, data: { id: number, name: string }[] }) {

    return <>
        <Head>
            <title>{props.title + props.data.length.toString()}</title>
        </Head>
        <main>
            <h1>关于我们</h1>
            <p>这是我们的关于我们页面</p>

            <ul>
                {props.data.map(x => (<li key={x.id}>{x.name}</li>))}
            </ul>

        </main>
    </>
}

export async function getStaticProps() {
    return {
        props: {
            title: '我的标题2',
            data: [
                { id: 1, name: '张三' },
                { id: 2, name: '李四' },
                { id: 3, name: '王五' }
            ]
        }
    }
}