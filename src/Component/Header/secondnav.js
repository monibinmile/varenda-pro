
import styles from './secondnev.module.scss'
const SecondNav = () => {
;
    return (
        <>
            <div className={`${styles.wrapper} row justify-content-between`}>
                <div className='col'>

                    <h6>Section</h6>

                </div>
                <div className='col'>

                    <h6>Time Left: </h6>

                </div>


            </div>
        </>
    )
}
export default SecondNav;