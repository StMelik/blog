import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirectionClass: Record<DropdownDirection, string> = {
  'top left': cls.optionTopLeft,
  'top right': cls.optionTopRight,
  'bottom right': cls.optionBottomRight,
  'bottom left': cls.optionBottomLeft
};
