import { writable } from 'svelte/store';

export default writable([
  {
    id: 1, x: 10, y: 10, speed: 0.1, color: 'green',
  },
  {
    id: 2, x: 10, y: 25, speed: 0.2, color: 'red',
  },
  {
    id: 3, x: 10, y: 40, speed: 0.15, color: 'blue',
  },
]);
