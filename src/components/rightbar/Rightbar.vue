<template>
  <div id="rightbar" class="col-2 fixed-right collapse-div">
    <div class="row justify-content-start">
      <div class="class">
        <i class="material-icons" id="rightbar-icon" v-on:click="slideRight">menu</i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Rightbar",
  methods: {
    slideRight: function() {
      $("#rightbar").toggleClass("collapse-div");
    }
  },
  components: {
  }
};
</script>