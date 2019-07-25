import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    breadcrunbList:[]
}

const mutations = {
    addReadcrunbList(breadcrunbList,newValues){
        //console.log(breadcrunbList,newValues);    
        state.breadcrunbList[0] = newValues;
    }
}

export default new Vuex.Store({
    state,
    mutations
})