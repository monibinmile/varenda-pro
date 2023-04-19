import { nextQuestion } from '../../reduxtoolkit/createslice';
import styles from './footer.module.scss';
import { useDispatch } from 'react-redux';

const Footer = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(nextQuestion());
       
    }
    

    return (
        <>

            <div className={`${styles.rowdata} row `}>
                <div className={`${styles.coldata} col-md-8`}>
                    <div className="row">
                        <div className="col-md-4">
                            <button type="button" class="btn btn-primary"
                                onClick={handleClick}
                            >Mark for review and Next</button>


                        </div>
                        <div className="col-md-4">
                            <button type="button" class="btn btn-primary">clear Response</button>


                        </div>

                    </div>

                </div>
                <div className={`${styles.coldata} col-md-4`}>
                    <div className="row ">
                        <div className={`${styles.colsecdata} col-md-2`}>
                            <button type="button" class="btn btn-primary">Save & Next</button>


                        </div>
                        <div className={`${styles.colsecdataa} col-md-2`}>
                            <button type="button" class="btn btn-primary">Submit Exam</button>


                        </div>

                    </div>

                </div>

            </div>

        </>
    )

}
export default Footer;