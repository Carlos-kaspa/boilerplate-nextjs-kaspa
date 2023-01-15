import { FC, ReactNode } from 'react'
import styles from './layout.module.css'

interface IDefaultLayout {
    children: ReactNode
}

const DefaultLayout: FC<IDefaultLayout> = ({ children }) => {
    return (
        <>
            {/* <TopNavBar /> */}
            <main className={styles.main}>{children}</main>
            {/* <Footer /> */}
        </>
    )
}
export default DefaultLayout
