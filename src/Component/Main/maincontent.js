import styles from './maincontent.module.scss'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';


import { useSelector } from 'react-redux';

const MainData = () => {


    const currentQuestionIndex = useSelector((state) => state.counter.currentQuestionIndex);
    const currentQuestion = useSelector((state) => state.counter.questions[currentQuestionIndex]);


    return (
        <>
            <div className={`${styles.containerdata} row`}>
                <div className={`${styles.mainfirstcol} col-md-6`}>
                    <div className='row'>
                        <div className='col'>
                            <h4>{currentQuestion.para}</h4>
                            <h6>{currentQuestion.desc}</h6>

                            <h6>{currentQuestion.content}</h6>
                        </div>


                    </div>
                </div>

                <div className={`${styles.mainsecondcol} ${styles.scrollbar} col-md-6`}>
                    <div className={`${styles.container}  row `}>
                        <div className={`${styles.ques} col-md-2`}>
                            <h6>Question Type: MCQ</h6>
                        </div>
                        <div className={`${styles.mark} col-md-2`}>
                            <h6>Mark/s: <span>0.01</span> | Negative Mark/s: <span className={styles.negativemark}>0.35</span> </h6>
                        </div>
                    </div>

                    <div className={`${styles.thirdrow} row`}>
                        <div className='col'>
                            <h6>Question No. {currentQuestion.id} </h6>
                        </div>
                    </div>
                    <div className={`${styles.fourthrow} row`}>
                        <div className={`${styles.fourthcol} col`}>
                            <h5>
                                {currentQuestion.question}
                            </h5>
                        </div>

                    </div>
                    {currentQuestion.options.map((option) => {
                        return (
                            <>
                                <div className={`${styles.fivthrow} row`} >
                                    <div className={`${styles.fivthcol} col`}>

                                        <FormControl variant="standard" >
                                            <RadioGroup
                                                aria-labelledby="demo-error-radios"
                                                name="quiz"
                                            >

                                                <FormControlLabel
                                                    className={styles.formgrp}
                                                    value={option}
                                                    control={<Radio />}
                                                    label={
                                                        <> <div>{option}</div>
                                                            <div>{option}</div></>


                                                    }
                                                />

                                            </RadioGroup>
                                        </FormControl>

                                    </div>

                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}
export default MainData;