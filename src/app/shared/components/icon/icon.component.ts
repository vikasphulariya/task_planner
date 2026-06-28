import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LucideDynamicIcon } from '@lucide/angular';

import {
  DEFAULT_ICON_COLOR,
  DEFAULT_ICON_SIZE,
  DEFAULT_ICON_VARIANT,
  ICON_SIZE_MAP,
} from './icon.constants';
import { ICON_REGISTRY } from './icon.registry';
import type { IconColor, IconName, IconSize, IconVariant } from './icon.types';

@Component({
  selector: 'app-icon',
  standalone: true,
  imports: [LucideDynamicIcon, MatTooltipModule],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  readonly name = input.required<IconName>();

  readonly size = input<IconSize>(DEFAULT_ICON_SIZE);

  readonly color = input<IconColor>(DEFAULT_ICON_COLOR);

  readonly variant = input<IconVariant>(DEFAULT_ICON_VARIANT);

  readonly tooltip = input<string | null>(null);

  readonly rotate = input<number>(0);

  readonly disabled = input(false);

  readonly icon = computed(() => ICON_REGISTRY[this.name()]);

  readonly pixelSize = computed(() => ICON_SIZE_MAP[this.size()]);

  readonly tooltipText = computed(() => this.tooltip()?.trim() || null);

  readonly hostClasses = computed(() =>
    [
      'icon',
      `icon--${this.size()}`,
      `icon--${this.color()}`,
      `icon--${this.variant()}`,
      this.disabled() ? 'icon--disabled' : '',
    ]
      .filter(Boolean)
      .join(' '),
  );

  readonly rotationStyle = computed(() => `rotate(${this.rotate()}deg)`);
}
