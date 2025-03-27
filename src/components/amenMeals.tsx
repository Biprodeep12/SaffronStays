import styles from '@/styles/amenMeal.module.css';
import Image from 'next/image';

export default function AmenMeal() {
  return (
    <>
      <div className={styles.amenities}>
        <div className={styles.head}>Amenities</div>
        <div className={styles.amenContent}>
          <div className={styles.cont}>
            <div className={styles.innerCont}>
              <Image src='/greybed.svg' alt='bed' width={21} height={21} />4
              Bedrooms
            </div>
            <div className={styles.innerCont}>
              <Image src='/park.svg' alt='bed' width={21} height={21} />
              Free parking
            </div>
            <div className={styles.innerCont}>
              <Image src='/greyBed.svg' alt='bed' width={21} height={21} />4
              Bedrooms
            </div>
          </div>
          <div className={styles.cont}>
            <div className={styles.innerCont}>
              <Image src='/greyGuest.svg' alt='bed' width={21} height={21} />
              12 Guests
            </div>
            <div className={styles.innerCont}>
              <Image src='/ac.svg' alt='bed' width={21} height={21} />
              Air Conditioning
            </div>
            <div className={styles.innerCont}>
              <Image src='/greyGuest.svg' alt='bed' width={21} height={21} /> 12
              Guests
            </div>
          </div>
        </div>
        <div className={styles.viewAmenCont}>
          <div className={styles.viewAmen}>View all Amenities</div>
        </div>
      </div>
      <div className={styles.meal}>
        <div className={styles.headMeal}>Meals</div>
        <div className={styles.mealText}>
          A cook is available to prepare local specialities and a delicious
          spread of home-cooked meals all day, at an additional charge
        </div>
        <div className={styles.nveg}>
          <div className={styles.veg}>
            <div className={styles.vegImg}>
              <div className={styles.innerVeg}></div>
            </div>
            Veg
          </div>
          <div className={styles.nonveg}>
            <div className={styles.nonvegImg}>
              <div className={styles.innerNonVeg}></div>
            </div>
            Non Veg
          </div>
        </div>
        <div className={styles.mealBtn}>
          <div className={styles.viewM}>View Menu</div>
          <div className={styles.mealCard}>Meal Rate Card</div>
        </div>
      </div>
    </>
  );
}
