<template>
    <div>
      <ul>
        <li v-for="review in reviews" :key="review.id">
          <router-link :to="`/review/${review.id}`">{{ review.attributes.title }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: ['reviews'],
  };
  </script>
  