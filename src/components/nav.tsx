import { useState, useEffect } from 'react';
import styles from '@/styles/nav.module.css';
import Image from 'next/image';

export default function Nav() {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 776);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className={styles.nav}>
      {isDesktop ? (
        <>
          <Image src='/xseries.svg' alt='xseries' width={150} height={45} />
          <div className={styles.searchBox}>
            <div>
              <Image
                src='/search.svg'
                alt='search'
                width={20}
                height={20}
                className={styles.searchIcon}
              />
            </div>
            <input
              type='text'
              className={styles.input}
              placeholder='search for location, villa, facilities...'
            />
          </div>
          <div className={styles.saffronBox}>
            <Image src='/safron.svg' alt='safron' width={23} height={23} />
            <div className={styles.saffrontext}>SaffronStays</div>
          </div>
          <div className={styles.phoneBox}>
            <Image src='/phone.svg' alt='phone' width={18} height={18} />
            <div className={styles.phonetext}>08069160000</div>
          </div>
          <div className={styles.login}>Login</div>
        </>
      ) : (
        <>
          <Image src='/safron.svg' alt='safronMob' width={33} height={33} />
          <Image src='/search.svg' alt='searchMob' width={24} height={24} />
        </>
      )}
    </nav>
  );
}
