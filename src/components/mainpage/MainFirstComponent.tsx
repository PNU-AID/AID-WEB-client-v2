import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { colors } from '../common/Color';
import AidMainBanner from '../../assets/aid-main-banner.png';

function MainFirstComponent() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen text-4xl font-bold leading-[100px] text-center text-white ">
      <div className="relative w-full h-[500px] overflow-hidden items-center flex flex-col">
        <img className="-z-10 min-w-screen" src={AidMainBanner} />
        <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col mt-20">
          <h1 className="mb-20 text-white text-9xl">AID</h1>
          <p className="mt-20 text-xl">AI Engineering & Research in PNU</p>
        </div>
      </div>
      <div className="absolute animate-bounce bottom-10">
        <MdKeyboardDoubleArrowDown color={colors.secondary} size={50} />
      </div>
    </section>
  );
}

export default MainFirstComponent;
