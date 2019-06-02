<script>
  import { fly } from "svelte/transition";
  import Topcar from "../assets/topcar.svg.svelte";

  export let car;
</script>

<style>
  g.green {
    fill: #005500
  }
  g.red {
    fill: #aa0000
  }
  g.blue {
    fill: #0000ee
  }
</style>
<g
  transform={`translate(${car.x}, ${car.y}) scale(0.02)`}
  out:fly={{ y: -5, duration: 200 }}
  class={car.color}
>
  <Topcar />
</g>

