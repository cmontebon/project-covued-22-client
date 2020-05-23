<template>
    <div class="main-wrapper">
        <div class="sidebar">
            <div>
                <div class="logo">Covid-22</div>
                <div class="search">
                    <input type="text" placeholder="Search Barangay">
                </div>
            </div>
            <ul class="list-items" >
                <li v-for="brgy in barangays" :key="brgy.id"><a @click="center = transformCoordinates(brgy.lat_long)">{{ brgy.name }}</a></li>
            </ul>
        </div>
        <GoogleMap :center="center" />
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
          barangays: [
            {
            "id": 1,
            "name": "Nazareth",
            "lat_long": "8.4710803,124.6461613",
            "created_at": "2020-05-17 21:09:28",
            "updated_at": "2020-05-17 22:24:02"
            },
            {
            "id": 2,
            "name": "Camaman-an",
            "lat_long": "8.4611224,124.6519473",
            "created_at": "2020-05-17 22:25:32",
            "updated_at": "2020-05-17 22:25:32"
            }
        ]
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
        this.transformCoordinates(this.barangays[0].lat_long)
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