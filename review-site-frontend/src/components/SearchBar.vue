<template>
    <div>
      <input v-model="query" @input="onInput" placeholder="Search reviews..." />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        query: '',
      };
    },
    methods: {
      onInput() {
        this.$emit('search', this.query);
      },
    },
  };
  </script>
  