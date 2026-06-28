import { ChangeDetectionStrategy, Component, computed, input, output, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { map, startWith } from 'rxjs';
import { IconComponent } from '@shared/components/icon';

export type AutocompletePrimitive = string | number;

export interface BaseAutocompleteOption<TValue = AutocompletePrimitive> {
  label: string;
  value: TValue;
}

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    IconComponent,
  ],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutocompleteComponent<T extends BaseAutocompleteOption = BaseAutocompleteOption> {
  // ------------------------
  // Inputs
  // ------------------------

  readonly items = input<T[]>([]);

  readonly label = input<string | null>(null);

  readonly placeholder = input('Search...');

  readonly clearable = input(false);

  readonly disabled = input(false);

  readonly emptyText = input('No results found');

  // ------------------------
  // Outputs
  // ------------------------

  /** Emits the selected option. */
  readonly selectionChange = output<T>();

  /** Emits only the search text typed by the user. */
  readonly searchChanged = output<string>();

  readonly cleared = output<void>();

  // ------------------------
  // State
  // ------------------------

  /**
   * Material owns this control.
   *
   * It stores:
   * - string while typing
   * - T after selection
   */
  readonly control = new FormControl<T | string>('', {
    nonNullable: true,
  });

  /** Currently selected option. */
  readonly selectedOption = signal<T | null>(null);

  /**
   * Reactive search text.
   */
  private readonly searchText = toSignal(
    this.control.valueChanges.pipe(
      startWith(this.control.value),
      map((value) => {
        if (typeof value === 'string') {
          return value;
        }

        return value?.label ?? '';
      }),
    ),
    {
      initialValue: '',
    },
  );

  /**
   * Filtered items.
   */
  readonly filteredItems = computed(() => {
    const search = this.searchText().toLowerCase().trim();

    if (!search) {
      return this.items();
    }

    return this.items().filter((item) => item.label.toLowerCase().includes(search));
  });

  // ------------------------
  // Event handlers
  // ------------------------

  handleInputChange(): void {
    const value = this.control.value;

    if (typeof value === 'string') {
      this.searchChanged.emit(value);
    }
  }

  handleOptionSelect(option: T): void {
    this.selectedOption.set(option);

    this.selectionChange.emit(option);
  }

  clear(): void {
    this.control.setValue('');

    this.selectedOption.set(null);

    this.searchChanged.emit('');

    this.cleared.emit();
  }

  readonly displayWith = (option: T | null): string => option?.label ?? '';
}
