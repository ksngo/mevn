<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="movie in movies" :key="movie._id">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn flat v-bind:to="`/movies/${movie._id}`">{{
                movie.name
              }}</v-btn>
            </div>
            <span class="grey--text"
              >{{ movie.release_year }} ‧ {{ movie.genre }}</span
            >
          </div>
        </v-card-title>
        <v-card-text>
          {{ movie.description }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      movies: [],
      current_user: null
    };
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    async fetchMovies() {
      const token = window.localStorage.getItem("auth");
      return axios({
        method: "get",
        url: "/movies",
        headers: {
          Authorization: `JWT ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          this.movies = response.data.movies;
          this.current_user = response.data.current_user;
        })
        .catch(() => {});
    },
  },
  // computed: {
  //   movies(){
  //     return this.$store.getters.fetchMovies;
  //   }
  // },
  // mounted(){
  //   this.$store.dispatch("fetchMovies");
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
