import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, linkedSignal, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop'
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
   private vehicleUrl = 'https://swapi.py4e.com/api/vehicles';

   // Injected services
   private http = inject(HttpClient);

   // Signals managed by the service
   selectedVehicle = signal<Vehicle | undefined>(undefined);

   // Reset the quantity when the vehicle changes
   quantity = linkedSignal({
      source: this.selectedVehicle,
      computation: (v) => {
         if (v) {
            return 1;
         }
         return 0;
      }
   });

   // Computed signals
   total = computed(() => (this.selectedVehicle()?.cost_in_credits ?? 0) * this.quantity());
   color = computed(() => this.total() > 50000 ? 'green' : 'blue');

   vehiclesResource = rxResource({
      loader: () => this.http.get<VehicleResponse>(this.vehicleUrl).pipe(
         map(vr => vr.results)
      )
   });
   vehicles = computed(() => this.vehiclesResource.value() ?? [] as Vehicle[]);
}

export interface VehicleResponse {
   count: number;
   next: string;
   previous: string;
   results: Vehicle[]
}

export interface Vehicle {
   name: string;
   cost_in_credits: number;
}