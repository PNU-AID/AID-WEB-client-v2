import type { ButtonProps } from 'button';

/**
 * @typedef {Object} ButtonProps - 버튼 컴포넌트의 속성 타입 정의
 * @property {boolean} [primary=false] - 주 버튼 스타일 여부
 * @property {'small' | 'medium' | 'large'} [size='medium'] - 버튼 크기
 * @property {string} label - 버튼에 표시될 텍스트
 * @property {Object} [props] - 기타 HTML 버튼 속성
 */

/**
 * 주어진 스타일과 크기를 가진 React 버튼 컴포넌트입니다.
 *
 * @component
 * @example
 * const onClickHandler = () => {
 *   // 버튼이 클릭되었을 때 수행할 동작
 * };
 *
 * <Button
 *   primary={true}
 *   size="large"
 *   label="Click me"
 *   onClick={onClickHandler}
 * />
 *
 * @param {ButtonProps} props - 버튼 컴포넌트에 전달되는 속성들
 * @returns {JSX.Element} - 스타일 및 크기가 지정된 버튼 JSX 엘리먼트
 */
function Button({
  primary = false,
  size = 'medium',
  label,
  ...props
}: ButtonProps) {
  const baseClasses =
    'border-0 rounded cursor-pointer inline-block leading-normal w-fit';
  const primaryClasses = 'text-white bg-primary hover:opacity-90';
  const secondaryClasses = 'text-text-primary bg-transparent hover:bg-gray-200';
  const sizeClasses = {
    small: 'text-xs py-2 px-4',
    medium: 'text-sm py-2.5 px-5',
    large: 'text-base py-3 px-6',
  };

  const classes = [
    baseClasses,
    primary ? primaryClasses : secondaryClasses,
    sizeClasses[size],
  ].join(' ');

  return (
    <button className={classes} {...props}>
      {label}
    </button>
  );
}

export default Button;
