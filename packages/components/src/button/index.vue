<script lang="ts" setup>
import "./style/index.less";
defineOptions({ name: "my-button" });

const emit = defineEmits(["click", 'update']);

function handleClick() {
  emit("click", { id: 1 });
}
</script>
<template>
  <button @click="handleClick()">
    <slot>测试按钮</slot>
  </button>
</template>