import styles from '@/styles/poster.module.css';
import Image from 'next/image';

export default function Poster() {
  return (
    <div className={styles.poster}>
      <div className={styles.opback}></div>
      <div className={styles.posterTitle}>
        <div className={styles.villaTitle}>Sea La Vie</div>
        <div className={styles.villaAdr}>Alibaug, Maharashtra</div>
        <Image
          className={styles.xCont}
          src='/xseries.svg'
          alt='xseries'
          width={120}
          height={35}
        />
      </div>
      <div className={styles.villaViews}>
        <div className={styles.viewCurrent}></div>
        <div className={styles.view}></div>
        <div className={styles.view}></div>
        <div className={styles.view}></div>
        <div className={styles.viewline}></div>
        <div className={styles.viewNext}>
          <Image src='/play.svg' alt='play' width={20} height={20} />
        </div>
      </div>
      <div className={styles.smallVilla}>+12</div>
    </div>
  );
}
