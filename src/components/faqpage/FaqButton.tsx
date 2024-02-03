import { FaqButtonProps } from '../../type/faq';

export default function FaqButton(props: FaqButtonProps) {
  let baseCss = 'text-xl font-semibold text-tthird';
  if (props.isContent) {
    baseCss = 'text-lg font-medium text-secondary';
  } else if (props.isActivate) {
    baseCss = 'text-xl font-semibold text-primary';
  }

  return (
    <button
      className={[
        'w-full p-4 text-start rounded-lg h-fit hover:bg-gray-100 hover:text-primary',
        baseCss,
      ].join(' ')}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  );
}
