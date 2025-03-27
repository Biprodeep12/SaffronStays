import styles from '@/styles/revAbout.module.css';
import Image from 'next/image';

export default function RevAbout() {
  return (
    <>
      <div className={styles.review}>
        <Image src='/star.svg' alt='star' width={21} height={21} />
        <div className={styles.revNo}>
          <div className={styles.revNo1}>4.5</div>
          <div className={styles.revNo2}>/ 5</div>
        </div>
        <div className={styles.sepLine}></div>
        <div className={styles.revs}>105 reviews</div>
        <div className={styles.sharelove}>
          <Image
            src='/share.svg'
            alt='share'
            className={styles.share}
            width={40}
            height={40}
          />
          <Image
            src='/heart.svg'
            alt='share'
            className={styles.love}
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className={styles.features}>
        <div className={styles.featVilla}>
          <Image src='/homeIcon.svg' alt='home' width={18} height={18} />
          Enter Villa
        </div>
        <div className={styles.dot}></div>
        <div className={styles.featVilla}>
          <Image src='/twoGuest.svg' alt='guest' width={18} height={18} />
          6-12 Guests
        </div>
        <div className={styles.dot}></div>
        <div className={styles.featVilla}>
          <Image src='/bedIcon.svg' alt='bed' width={18} height={18} />8
          Bedrooms
        </div>
        <div className={styles.dot}></div>
        <div className={styles.featVilla}>
          <Image src='/pawnIcon.svg' alt='pet' width={18} height={18} />
          Pet-Friendly
        </div>
      </div>
      <div className={styles.about}>
        <div className={styles.head}>About</div>
        <ol className={styles.aboutContent}>
          <li className={styles.content}>
            Tucked away cosily in the lap of nature, this is the perfect
            destination getaway for a vacation trip near Delhi and Chandigarh.
          </li>
          <li className={styles.content}>
            The tourist-favourite Bhimtal Lake is only a stone’s throw away.{' '}
            <span>Read more</span>
          </li>
        </ol>
      </div>
      <div className={styles.fourBtn}>
        <div className={styles.houseBtn}>House Rules</div>
        <div className={styles.villaBtn}>Cancellation Policy</div>
        <div className={styles.villaBtn}>Things you need to know</div>
        <div className={styles.villaBtn}>Things to do</div>
      </div>
    </>
  );
}
