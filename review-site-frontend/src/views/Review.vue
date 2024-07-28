<template>
    <div>
      <h1>{{ review.title }}</h1>
      <p>{{ review.content }}</p>
      <p><strong>Author:</strong> {{ review.author }}</p>
      <p><strong>Date:</strong> {{ review.date }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        review: {},
      };
    },
    created() {
      const reviewId = this.$route.params.id;
      axios.get(`http://localhost:1337/api/reviews/${reviewId}`)
        .then(response => {
          this.review = response.data.data.attributes;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>
  