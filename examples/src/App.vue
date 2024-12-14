<script lang="ts" setup>
function handleClick(s: any) {
    console.log("demo1-aaa", s);
}
</script>

<template>
   <my-button @click="handleClick">demo1-aaa</my-button>
</template>

<style scoped>

</style>
