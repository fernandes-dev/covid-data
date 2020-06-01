<template>
  <v-container fluid class="col-xl-6"> </v-container>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data: () => ({
    items: [
      "Medical",
      "Science",
      "Student",
      "Engeneering",
      "Mathematics",
      "Others"
    ],
    item: null
  }),
  methods: {
    goAndSend() {
      if (this.item)
        this.$vuetify.goTo(this.$parent.$parent.$children[2].$el.children[0]);
    }
  }
};
</script>
<style scoped>
.pre-title {
  color: #5dc196;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 5px;
}

.title-page {
  font-size: 5.5rem;
  font-weight: bold;
  color: #1a8a92;
  line-height: 125px;
}

.subtitle-container {
  width: 400px;
}

.subtitle-page {
  color: #868686;
  font-size: 1.5rem;
  line-height: 33px;
}

.select {
  border-radius: 8px;
  border: solid 1px #63c398 !important;
}

.begin {
  text-transform: none;
  font-size: 20px;
}

.section {
  margin-top: 55px;
}
.card-action {
  box-shadow: 1px 1px 20px 4px rgba(94, 193, 150, 0.3) !important;
}
.title-card {
  padding: 15px 10px;
  text-align: center;
  font-size: 20px !important;
  color: #1a8a92;
  font-weight: bold;
}

.v-card {
  border-radius: 15px !important;
}

@media (max-width: 770px) {
  .pre-title {
    color: #5dc196;
    font-weight: bold;
    font-size: 1.2rem;
  }

  .title-page {
    font-size: 2rem;
    font-weight: bold;
    color: #1a8a92;
  }

  .subtitle-container {
    width: 250px;
  }

  .subtitle-page {
    color: #868686;
    font-size: 1.2rem;
  }
  .section {
    margin-top: 40px;
  }
}
</style>
