<template>
  <button class="my-button">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.my-button {
  background-color: red;
  display: flex;
}
</style>
