import { Component, Input } from '@angular/core';
import { RouterLink } from "@angular/router";

//in future, make component reusable like button
//define how many links, their route, and name dynamically
@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  @Input() navLink: string[] = [];
  
}
