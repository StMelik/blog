import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Icon.module.scss';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableIconProps extends IconBaseProps {
  clickable?: false;
  onClick?: undefined;
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NonClickableIconProps | ClickableIconProps;

export const Icon = memo((props: IconProps) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    onClick,
    ...otherProps
  } = props;

  const icon = (
    <Svg
      className={classNames(cls.icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
    />
  );

  if (clickable) {
    return (
      <button
        className={cls.button}
        type='button'
        onClick={onClick}
        style={{ width, height }}
      >
        {icon}
      </button>
    );
  }

  return icon;
});
