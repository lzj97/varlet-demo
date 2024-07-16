<template>
  <div>
    <h1>About</h1>
    <button @click="show">go back</button>
  </div>
</template>
<script setup lang="ts">
import { Dialog } from "@varlet/ui";
import "@varlet/ui/es/dialog/style/index";
import { useRouter } from "vue-router";

const router = useRouter();

function show() {
  Dialog({
    message: "are you sure?",
    confirmButtonText: "yes",
    onConfirm: () => {
      router.back();
    },
  });
}
</script>
