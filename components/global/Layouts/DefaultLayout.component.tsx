import { FC, ReactNode } from 'react'
import styles from './layout.module.css'

interface IDefaultLayout {
    children: ReactNode
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
    return (
        <>
            <section> header </section>
            <main className={styles.main}>{children}</main>
            <section> footer </section>
        </>
    )
}
export default DefaultLayout
