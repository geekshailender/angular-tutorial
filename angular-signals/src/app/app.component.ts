import { Component, inject } from '@angular/core';
import { VehicleService } from './vehicle.service';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Injected services
  private vehicleService = inject(VehicleService);

  // Signals to support the template
  vehicles = this.vehicleService.vehicles;
  selectedVehicle = this.vehicleService.selectedVehicle;
  quantity = this.vehicleService.quantity;
  total = this.vehicleService.total;
  color = this.vehicleService.color;
}
