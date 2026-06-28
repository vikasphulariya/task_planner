import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@shared/containers/header/header.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, Header],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss',
})
export class AppShellComponent {}
