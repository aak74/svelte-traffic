import moveCars from './cars';

function startLoop(steps) {
  window.requestAnimationFrame(() => {
    steps.forEach(step => {
      if (typeof step === 'function') step();
    });
    // if (get(isPlaying)) startLoop(steps);
    startLoop(steps);
  });
}

export default function () {
  // isPlaying.set(true);
  setTimeout(() => {
    startLoop([
      moveCars,
    ]);
  }, 2000);
}
