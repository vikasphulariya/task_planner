import type { AppColor } from '@shared/styles/tokens/color.types';
import { ICON_REGISTRY } from './icon.registry';

export type IconSize = 'sm' | 'md' | 'lg';

export type IconVariant = 'plain' | 'outlined' | 'filled' | 'circle';

export type IconColor = AppColor;

export type IconName = keyof typeof ICON_REGISTRY;
