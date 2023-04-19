import styles from './menu.module.scss';

const MenuNav = () => {
    return (
        <>
            <div className={`${styles.rowdata} row`}>
                <div className={`${styles.reasonData} col-sm-2`}>
                    <h6>Reasoning</h6>
                </div>
                <div className={`${styles.quansdata} col-sm-2`}>
                    <p>Quans</p>

                </div>


            </div>

        </>
    )

}
export default MenuNav;