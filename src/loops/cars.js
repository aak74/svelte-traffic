// import { get } from 'svelte/store';

import carList from '../stores/cars';

export default function () {
  carList.update(cars => cars.map(car => {
    // console.log('car', car, index);
    if (car.x > 480) {
      car.x = 0;
    }
    return {
      ...car,
      x: car.x + car.speed,
    };
  }));
}
