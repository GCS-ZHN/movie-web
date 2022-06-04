<template>
<div>
    <Player />
</div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component';
import Player from '../../components/player/Player.vue';

@Options({
  components: {
    Player,
  },
  })
export default class extends Vue {}
</script>

<style>
</style>