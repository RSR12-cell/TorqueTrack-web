import styles from './CustomerContextMenu.module.css'

type coordinateProps = {
    x: number,
    y: number
}

export default function CustomerContextMenu({x, y}: coordinateProps){

    return (
        <ul className={styles.customer_contextMenu} style={{
            top: `${y}px`,
            left: `${x}px`
        }}>
            <li>Update Customer</li>
            <li>Delete Customer</li>
        </ul>
    )
}