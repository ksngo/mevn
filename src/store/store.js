import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

/* eslint-disable */
export const store = new Vuex.Store({
    state: {
        movies: []
    },
    getters: {
        fetchMovies: state => state.movies
    },
    mutations: {
        MOVIES: (state, payload) => {
            state.movies = payload;
        },
        ADD_MOVIE: (state, payload)=>{
            state.movies.unshift(payload);
        }
    },
    actions: {
        fetchMovies: (context, payload) => {
            axios({
                method: 'get',
                url: '/movies'
            }).then((response) => {
                context.commit("MOVIES", response.data.movies)
            }).catch(() => { });
        },
        addMovie: (context, payload) => {
            return axios({
                method: 'post',
                data: payload,
                url: '/movies',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                context.commit("ADD_MOVIE", response.data)
                this.$swal("Great!", "Movie added successfully!", "success");
            }).catch(() => {
                this.$swal("Oh oo!", "Could not add the movie!", "error");
            })
        }
    }
})