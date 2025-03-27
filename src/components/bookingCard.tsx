import styles from '@/styles/bookCard.module.css';
import Image from 'next/image';

export default function BookCard() {
  return (
    <>
      <div className={styles.bookCard}>
        <div className={styles.price}>
          <div className={styles.orgPrice}>₹1,49,086</div>
          <div className={styles.disPriceCont}>
            <div className={styles.disPrice}>₹1,00,086</div>
            <div className={styles.night}>/Night</div>
          </div>
        </div>
        <div className={styles.lineSep}></div>
        <div className={styles.specialDis}>
          <div className={styles.sDText}>Special discounts available!!</div>
          <div className={styles.sDPrice}>Unlock Price</div>
        </div>
        <div className={styles.check}>
          <Image src='/calendar.svg' alt='cal' width={16} height={17} />
          <div className={styles.checkText}>Check in - Check out</div>
          <Image
            src='/updown.svg'
            alt='updown'
            className={styles.checkUpDown}
            width={10}
            height={22}
          />
        </div>
        <div className={styles.check}>
          <Image src='/guest.svg' alt='guest' width={16} height={17} />
          <div className={styles.checkText}>Check in - Check out</div>
          <Image
            src='/updown.svg'
            alt='updown'
            className={styles.checkUpDown}
            width={10}
            height={22}
          />
        </div>
        <div className={styles.checkAvail}>Check Availability</div>
      </div>
      <div className={styles.bookingcardMob}>
        <div className={styles.text_price}>
          <h6>₹1,49,086</h6>
          <div className={styles.inside_price}>
            <strong>₹1,00,086</strong>
            <p>/night</p>
          </div>
        </div>
        <div className={styles.inside_bcm_btn}>Check Availability</div>
      </div>
    </>
  );
}
