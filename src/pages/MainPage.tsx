import MainFirstComponent from '../components/mainpage/MainFirstComponent';
import MainSecondComponent from '../components/mainpage/MainSecondComponent';
import AidMainBanner from '../assets/aid-main-banner.png';

function MainPage() {
  return (
    <>
      <img
        className="fixed min-h-screen min-w-screen -z-10"
        src={AidMainBanner}
      />
      <MainFirstComponent />
      <MainSecondComponent />
    </>
  );
}

export default MainPage;
