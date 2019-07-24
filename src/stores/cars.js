import { writable } from 'svelte/store';

export default writable([
  {
    id: 1, x: 10, y: 10, speed: 0.1, color: 'green', trackType: 'straight', angle: 0,
  },
  {
    id: 2, x: 10, y: 25, speed: 0.2, color: 'red', trackType: 'straight', angle: 0,
  },
  {
    id: 3, x: 10, y: 40, speed: 0.15, color: 'blue', trackType: 'straight', angle: 0,
  },
  {
    id: 4, x: 220, y: 60, speed: 0.5, color: 'blue', trackType: 'circle', angle: 0, r: 120,
  },
  {
    id: 5, x: 220, y: 75, speed: 0.15, color: 'red', trackType: 'circle', angle: 0, r: 105,
  },
  {
    id: 6, x: 220, y: 90, speed: 0.2, color: 'green', trackType: 'circle', angle: 0, r: 90,
  },
]);
