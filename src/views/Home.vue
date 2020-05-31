<template>
  <v-container fluid class="col-xl-6">
    <v-card
      :height="$vuetify.breakpoint.smAndUp ? '415px' : ''"
      elevation="0"
      style="background: transparent !important;"
    >
      <v-row class="section px-5" justify="center">
        <v-col
          cols="12"
          sm="7"
          md="7"
          class="d-flex justify-center animate__animated animate__backInLeft"
        >
          <v-card
            width="80%"
            elevation="0"
            style="background: transparent !important;"
          >
            <div>
              <div class="pre-title">Welcome to</div>
            </div>
            <div>
              <div class="title-page">Covid Data</div>
            </div>
            <div class="subtitle-container">
              <div class="subtitle-page">
                making the COVID-19 data more accessible
              </div>
            </div>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="5"
          md="4"
          class="px-0 d-flex justify-center justify-sm-start animate__animated animate__backInRight"
        >
          <v-card width="85%" elevation="0" class="pa-5 card-action">
            <div class="title-card">
              Whats your occupation area?
            </div>
            <v-card-text>
              <v-select
                hide-details
                outlined
                v-model="item"
                :items="items"
                label="Select"
              ></v-select>
              <div class="d-flex justify-center">
                <v-btn
                  hide-details
                  color="#63c398"
                  elevation="0"
                  class="col-8 mt-4 begin"
                  dark
                  x-large
                  @click="goAndSend()"
                >
                  Begin
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
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
