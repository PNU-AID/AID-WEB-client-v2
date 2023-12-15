import { MdKeyboardDoubleArrowDown } from 'react-icons/md';
import { colors } from '../common/Color';

function MainFirstComponent() {
  return (
    <div className="flex items-center justify-center w-full h-screen text-4xl font-bold text-center text-white bg-primary">
      문제는
      <br />
      <br />
      <br />
      지적인 기계가 어떤 감정을 가질 수 있느냐가 아니라
      <br />
      <br />
      <br />
      기계가 아무런 감정 없이 지능을 가질 수 있느냐 하는 것이다.
      <br />
      <br />
      <br />
      -Marvin Minsky-
      <div className="absolute animate-bounce bottom-10">
        <MdKeyboardDoubleArrowDown color={colors.secondary} size={50} />
      </div>
    </div>
  );
}

export default MainFirstComponent;
