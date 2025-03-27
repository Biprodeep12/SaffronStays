import styles from '@/styles/realLocRoom.module.css';
import Image from 'next/image';

export default function RealLockRoom() {
  return (
    <>
      <div className={styles.RealMom}>
        <div className={styles.RealHead}>Real Moments</div>
        <div className={styles.RealImgCont}>
          {[
            {
              id: 1,
              name: 'Vinay',
              date: 'Sep 03, 2023',
              img: '/realmoments.png',
            },
            {
              id: 2,
              name: 'Vinay',
              date: 'Sep 03, 2023',
              img: '/realmoments.png',
            },
            {
              id: 3,
              name: 'Vinay',
              date: 'Sep 03, 2023',
              img: '/realmoments.png',
            },
          ].map((moment) => (
            <div key={moment.id} className={styles.InnerReal}>
              <Image src={moment.img} alt='villa' width={260} height={323} />
              <div className={styles.RealText}>
                {moment.name} <div className={styles.RealDot}></div>
                {moment.date}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.location}>
        <div className={styles.locHead}>Location</div>
        <div className={styles.locMap}></div>
        <div className={styles.locBtnCont}>
          <div className={styles.locBtn}>Get Direction</div>
        </div>
      </div>
      <div className={styles.RoomBed}>
        <div className={styles.RoomBedHead}>Rooms & Beds</div>
        <div className={styles.RBCont}>
          {[
            {
              img: '/realmoments.png',
              text: [
                'Tucked away cosily in the lap of nature, this is the perfect destination getaway',
                'The tourist-favourite Bhimtal Lake is only a stone’s throw away.',
              ],
            },
            {
              img: '/realmoments.png',
              text: [
                'Tucked away cosily in the lap of nature, this is the perfect destination getaway',
                'The tourist-favourite Bhimtal Lake is only a stone’s throw away.',
              ],
            },
            {
              img: '/realmoments.png',
              text: [
                'Tucked away cosily in the lap of nature, this is the perfect destination getaway',
                'The tourist-favourite Bhimtal Lake is only a stone’s throw away.',
              ],
            },
          ].map((moment, index) => (
            <div key={index} className={styles.RBImgCont}>
              <Image src={moment.img} alt='real' width={300} height={184} />
              <div className={styles.RBTextCont}>
                <ul className={styles.RBText}>
                  {moment.text.map((line, index) => (
                    <li key={index}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
