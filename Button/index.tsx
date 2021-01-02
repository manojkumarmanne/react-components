import React from 'react';
import cn from 'classnames';
import Styles from './index.module.scss';

type ButtonStyle = 'primary' | 'secondary' | 'tertiary' | 'danger';

type IconPosition = 'left' | 'right';

type ButtonPropsType = {
  buttonStyle: ButtonStyle,
  disabled?: boolean;
  small?: boolean;
  // Along with children when we need to show icon.
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  // kept optional, for popover triggers
  onClick?: () => void;
}

const Button: React.FC<ButtonPropsType> = ({
  buttonStyle,
  onClick,
  children,
  disabled,
  small,
  icon,
  iconPosition = 'left'
}) => {

  const getButtonStyle = (): string => {
    switch (buttonStyle) {
      case 'secondary':
        return Styles.buttonSecondary;
      case 'danger':
        return Styles.buttonDanger;
      case 'tertiary':
        return Styles.buttonTertiary;
      case 'primary':
      default:
        return Styles.buttonPrimary;
    }
  }

  const getButtonSize = (): string => {
    if (small) {
      return Styles.buttonSmall;
    }
    return Styles.buttonLarge;
  }

  const getIconPlacement = (): string => {
    if (icon) {
      if (iconPosition === 'right') {
        return Styles.iconRight
      }
      return Styles.iconLeft;
    }
    return '';
  }

  return (
    <button
      className={cn(Styles.button, getButtonStyle(), getButtonSize(), getIconPlacement())}
      onClick={onClick}
      disabled={disabled}
    >
      {
        children
      }
      {
        icon
      }
    </button>
  )
}

export default Button;
