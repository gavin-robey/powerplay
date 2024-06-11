<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const id = ref(route.params.id);
import ChatComponent from 'src/components/ChatComponent.vue';
</script>

<template>
  <!-- able to pass in the id as a prop to be used in the page -->
  <ChatComponent :chatNameProp='id'/>
</template>
