<script>
  export let road;
</script>
  
<style>
  path {
    stroke: #aaaaaa;
    stroke-width: 12px;
    fill: none;
  }
</style>
<path d="
  M {road.x}, {road.y}
  m -{road.r}, 0
  a {road.r},{road.r} 0 1,0 {road.r*2},0
  a {road.r},{road.r} 0 1,0 -{road.r*2},0
"/>
