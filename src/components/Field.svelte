<script>
  import Car from "./Car.svelte";
  import cars from "../stores/cars";
  import start from "../loops/game";
  start();
</script>

<style>
  .container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-height: 100%;
  }
</style>

<div class="container">
  <svg viewBox="0 0 480 800">
    {#each $cars as car (car.id)}
      <Car {car} />
    {/each}
  </svg>
</div>
