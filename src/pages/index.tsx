import BookCard from '@/components/bookingCard';
import RevAbout from '@/components/revAbout';
import Nav from '@/components/nav';
import Poster from '@/components/poster';
import AmenMeal from '@/components/amenMeals';
import RealLockRoom from '@/components/realLocRoom';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Poster />
      <div className='mainCont'>
        <div className='mainSection'>
          <RevAbout />
          <AmenMeal />
          <RealLockRoom />
        </div>
        <BookCard />
      </div>
      <Footer />
    </>
  );
}
