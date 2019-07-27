<script>
  import RoadRound from "./RoadRound.svelte";
  import Road from "./Road.svelte";
  import Car from "./Car.svelte";
  import cars from "../stores/cars";
  import start from "../loops/game";

  const roads = [
    {x: 0, y: 13.5, length: 480},
    {x: 0, y: 28.5, length: 480},
    {x: 0, y: 43.5, length: 480},
  ];
  const roundRoads = [
    {x: 220, y: 180, r: 117},
    {x: 220, y: 180, r: 102},
    {x: 220, y: 180, r: 87},
  ];
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
    {#each roads as road (road.r)}
      <Road {road}/>
    {/each}
    {#each roundRoads as road (road.r)}
      <RoadRound {road}/>
    {/each}
    {#each $cars as car (car.id)}
      <Car {car} />
    {/each}
  </svg>
</div>
