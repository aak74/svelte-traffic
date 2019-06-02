import carList from '../stores/cars';

const fullDistance = 480;

let ticks = 0;

function getCoordsStraight(car) {
  if (car.x > fullDistance) {
    car.x = 0;
  }
  return {
    ...car,
    x: car.x + car.speed,
  };
}

function getCoordsCircle(car) {
  if (!car.x0) {
    car.x0 = car.x;
    car.y0 = car.y;
    car.angle = 0;
  }
  car.angle = ticks * car.speed / Math.PI;
  const angle = (car.angle - 90) * Math.PI / 180;
  car.x = car.x0 + Math.cos(angle) * car.r;
  car.y = car.y0 + (1 + Math.sin(angle)) * car.r;
  // console.log(car.x, car.y, car.angle);
  return car;
}


function getCoords(car) {
  ticks += 1;
  if (ticks > 360 * 1500) {
    ticks = 0;
  }
  if (car.trackType === 'straight') {
    return getCoordsStraight(car);
  }
  if (car.trackType === 'circle') {
    return getCoordsCircle(car);
  }
  return car;
}

export default function () {
  carList.update(cars => cars.map(getCoords));
}
