<template>
  <div id="App">
    <a-button type="primary" @click="hello">hello world</a-button>
    {{str}}
  </div>
</template>

<style lang="less">
@import url("~@less/theme.less");
#App {
  color: @color;
}
</style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class App extends Vue {
  public str: string = "";
  /**
   * hello
   */
  public hello(): void {
    this.str = "HELLO";
  }
}
</script>
