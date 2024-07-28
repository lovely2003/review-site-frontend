<template>
    <div>
      <SearchBar @search="handleSearch" />
      <ReviewList :reviews="filteredReviews" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import ReviewList from '@/components/ReviewList.vue';
  import SearchBar from '@/components/SearchBar.vue';
  
  export default {
    components: { ReviewList, SearchBar },
    data() {
      return {
        reviews: [],
        searchQuery: '',
      };
    },
    computed: {
      filteredReviews() {
        return this.reviews.filter((review) =>
          review.title.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      handleSearch(query) {
        this.searchQuery = query;
      },
    },
    created() {
      axios.get('http://localhost:1337/api/reviews')
        .then(response => {
          this.reviews = response.data.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>
  