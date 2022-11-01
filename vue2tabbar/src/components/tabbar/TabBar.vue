<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
  components: {
  }
}
</script>

<style>
  #tab-bar{
    background: #f6f6f6;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    box-shadow: 0px -1px 1px rgb(100, 100, 100,.2);
  }
</style>
