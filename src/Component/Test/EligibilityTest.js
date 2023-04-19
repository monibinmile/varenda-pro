import { useEffect, useState } from 'react';
import Footer from '../Footer/footer';
import MainData from '../Main/maincontent';
import styles from './eligibility.module.scss';
import MenuNav from './menunav';

const EligibilityTest = () => {
    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
  
    useEffect(() => {
      const storedStartTime = localStorage.getItem('startTime');
      if (storedStartTime) {
        const now = new Date().getTime();
        setStartTime(parseInt(storedStartTime));
        setElapsedTime(now - parseInt(storedStartTime));
      } else {
        setStartTime(new Date().getTime());
      }
    }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        setElapsedTime(now - startTime);
      }, 1000);
  
      return () => clearInterval(interval);
    }, [startTime]);
  
    useEffect(() => {
      localStorage.setItem('startTime', startTime.toString());
    }, [startTime]);
  
    const formatTime = (ms) => {
      const seconds = Math.floor((ms / 1000) % 60);
      const minutes = Math.floor((ms / 1000 / 60) % 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };
    console.log(formatTime, 'formatTime')
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div >
                        <h6>Section</h6>
                    </div>
                    <div >
                        <h6>Time Left: {formatTime(elapsedTime)}</h6>
                    </div>

                </div>
            </div>
            <MenuNav />
            <MainData />
            <Footer />
        </>
    )

}
export default EligibilityTest;