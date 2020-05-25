<template>
    <div class="main-wrapper">
        <div class="sidebar">
            <div>
                <div class="logo"><router-link to="/login">COVUED-22</router-link></div>
                <div class="search">
                    <input type="text" placeholder="Search Barangay" v-model="search">
                </div>
            </div>
            <ul class="list-items" v-if="barangays">
                <li v-for="brgy in filteredBrgy" :key="brgy.id"><a @click="center = transformCoordinates(brgy.lat_long)">{{ brgy.name }}</a></li>
            </ul>
        </div>
        <GoogleMap :center="center" v-if="$store.getters.cases"/>
    </div>
</template>

<script>
import GoogleMap from './GoogleMap'

export default {
  name: 'Home',
  components: {
      GoogleMap
  },
  data() {
      return {
          center: null,
          componentLoaded: false,
          search: ''
      }
  },
  computed: {
        barangays() {
            if(! this.componentLoaded) return null;
            return this.$store.getters.barangays
        },
        filteredBrgy() {
        return this.barangays.filter(brgy => brgy.name.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  methods: {
    transformCoordinates(coord) {
        let newCoord = coord.split(',').map(val => {
          return parseFloat(val)
        })

        return { lat: newCoord[0], lng: newCoord[1] }
    }
  },
  created() {
      this.$store.dispatch('fetchBarangays')
  },
  mounted() {
      this.componentLoaded = true;
  }
}
</script>

<style scoped>
    .main-wrapper {
        /* background: red; */
        width: 100%;
        height: 100vh;
        display: flex;
    }

    .sidebar {
        background: #FFF;
        width: 250px;
        border-right: solid 1px black;
        box-shadow: 20px -2px 20px -2px #8886;
        position: relative;
        z-index: 10;
        display: flex;
        flex-direction: column;
    }

    .logo {
        padding: 10px;
        text-align: center;
    }

    .search {
        border-top: 1px solid black;
        border-bottom: 1px solid black;
        padding: 15px;
    }

    .search > input{
        display: block;
        margin: 0 auto;
        padding: 7px 5px;
        width: 90%;
    }

    .sidebar > .list-items {
        padding: 0px;
        margin: 0px;
        overflow-y: auto;
    }

    .sidebar > .list-items > li > a{
        color: #000;
        padding: 10px;
        display: block;
        text-decoration: none;
        cursor: pointer;
    }

    .sidebar > .list-items > li > a:hover{
        background: #e0e0e0;
    }
</style>