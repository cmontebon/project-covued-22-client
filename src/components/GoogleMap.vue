<template>
    <gmap-map
      ref="mapRef"
      :center="newCenter"
      :zoom="12"
      style="width:100%;  height: 100vh;"
    >
    </gmap-map>
</template>

<script>
export default {
  name: "GoogleMap",
  props: ['center'],
  data() {
    return {
      // default to Montreal to keep it simple
      // change this to whatever makes sense
      defaults: { 
        center: { lat: 8.4538283, lng: 124.6301833 }
      },
    };
  },
  computed:{
    newCenter() {
      return this.center ? this.center : this.defaults.center
    },
    cases() {
      return this.$store.getters.cases
    }
  },
  created() {
    this.$store.dispatch('fetchCases').then(() => {
       this.initMap()
    });
   
  },
  mounted() {
    
  },
  methods: {
    async initMap(){
      this.$refs.mapRef.$mapPromise.then((map) => {
        var self = this;
        let latlon = new google.maps.MVCArray();

          this.cases.forEach(function(_case) {
              let coord = _case.barangay.lat_long.split(',')
              latlon.push(new google.maps.LatLng(coord[0], coord[1]));
          });

          let x = new google.maps.visualization.HeatmapLayer({
              data: latlon,
              map: self.$refs.mapRef.$mapObject,
              radius: 20,
          });   
      })
    }
  }
};
</script>