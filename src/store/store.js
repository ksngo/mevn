import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        movies: []
    },
    actions: {
        fetchMovies: (context, payload) =>{
            axios({
                method: 'get',
                url: '/movies'
            }).then((response)=>{
                context.commit("MOVIES", response.data.movies)
            }).catch(()=>{});
        }
    }
})