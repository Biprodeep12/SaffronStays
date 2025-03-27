import styles from '@/styles/footer.module.css';
import { useState, useEffect } from 'react';

import Image from 'next/image';

export default function Footer() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 940);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className={styles.foot}>
      <div className={styles.footDetail}>
        <div className={styles.saffronImg}>
          <Image src='/safron.svg' alt='saffron' width={37} height={37} />
          <div className={styles.saffronText}>
            <span>SaffronStays</span>
            <p>where families bond</p>
          </div>
        </div>
        {[
          {
            title: 'Company',
            text: ['SaffronStays', 'Signature', 'XSeries', 'About'],
          },
          {
            title: 'Company',
            text: ['SaffronStays', 'Signature', 'XSeries', 'About'],
          },
          {
            title: 'Contact',
            text: [
              'mail@saffronstays.com',
              '+91 3728253727',
              'Contact us',
              'Contact to Partner',
            ],
          },
          {
            title: 'Partner with us',
            text: ['Lsit a home'],
          },
          {
            title: 'Policies',
            text: ['Privacy Policy', 'Terms', 'Sitemap', 'Cancellation Policy'],
          },
        ].map((detail, index) => (
          <div key={index} className={styles.innerDetail}>
            <div className={styles.detailTitle}>{detail.title}</div>
            {detail.text.map((line, index) => (
              <div key={index} className={styles.details}>
                {line}
              </div>
            ))}
          </div>
        ))}
      </div>
      {isDesktop ? (
        <div className={styles.footest}>
          <div className={styles.footestText}>
            © 2021 SaffronStays. All rights reserved
          </div>
          <div className={styles.footDots}>
            <div className={styles.footdot}></div>
            <div className={styles.footdot}></div>
            <div className={styles.footdot}></div>
            <div className={styles.footdot}></div>
          </div>
        </div>
      ) : (
        <div className={styles.footestMob}>
          <div className={styles.mobText}>
            © 2021 SaffronStays. All rights reserved
          </div>
          <div className={styles.mobSocial}>
            <Image src='/facebk.svg' alt='facebook' width={18} height={18} />
            <Image src='/insta.svg' alt='instagram' width={20} height={18} />
            <Image src='/twit.svg' alt='twitter' width={18} height={18} />
            <Image src='/link.svg' alt='linkedin' width={18} height={18} />
            <Image src='/yt.svg' alt='youtube' width={20} height={18} />
            <Image src='/pint.svg' alt='pinterest' width={18} height={18} />
            <Image src='/google.svg' alt='googlePlus' width={22} height={18} />
          </div>
        </div>
      )}
    </div>
  );
}
