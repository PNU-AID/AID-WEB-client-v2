import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { colors } from '../common/Color';

export function MainFirstComponent() {
  return (
    <section className="relative flex items-center justify-center w-full h-screen text-4xl font-bold leading-[100px] text-center text-white ">
      <img
        className="fixed min-h-screen min-w-screen -z-10"
        src={AidMainBanner}
      />
      <div className="absolute animate-bounce bottom-10">
        <MdKeyboardDoubleArrowDown color={colors.secondary} size={50} />
      </div>
    </section>
  );
}
