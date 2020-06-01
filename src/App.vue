<template>
  <v-app class="app">
    <v-app-bar
      elevation="0"
      absolute
      app
      :height="$vuetify.breakpoint.smAndDown ? '80px' : '120px'"
      class="app-bar-home"
      :color="$vuetify.breakpoint.smAndDown ? 'white' : ''"
      style="background: transparent;"
      dark
    >
      <div class="ml-10 animate__animated animate__backInLeft">
        <v-img
          alt="Logo"
          src="@/assets/logo.png"
          :width="$vuetify.breakpoint.smAndDown ? '120px' : '200px'"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn
        absolute=""
        right=""
        style="text-transform: none;"
        v-if="$vuetify.breakpoint.xsOnly"
        color="primary"
        @click="openAbout()"
        icon
        class="mr-1 animate__animated animate__backInRight"
      >
        <v-icon>
          mdi-information-outline
        </v-icon>
      </v-btn>
      <v-btn
        style="text-transform: none;"
        v-else
        color="primary"
        @click="openAbout()"
        text
        class="mr-10 animate__animated animate__backInRight"
      >
        <span class="title">About</span>
      </v-btn>
    </v-app-bar>
    <v-content class="bg d-flex">
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
    </v-content>
    <v-row v-if="item" class="bg-white" justify="center">
      <h2 class="py-5 mb-10">Daily Dashboard</h2>
    </v-row>
    <iframe
      id="data"
      v-if="item"
      width="100%"
      height="550px"
      src="https://app.powerbi.com/reportEmbed?reportId=eeac3884-c00c-433c-bfe7-83b9874433f6&autoAuth=true&ctid=d41140b6-cbf2-42c8-95d5-f649a15b5c97&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLWJyYXppbC1zb3V0aC1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D"
      frameborder="0"
      allowFullScreen="true"
    ></iframe>
    <div class="collaborators">
      <Collaborators />
    </div>
    <v-card tile>
      <v-footer
        tile
        class="font-weight-medium d-flex justify-center"
        height="130px"
      >
        <div>
          <v-img alt="Logo" src="@/assets/logo.png" width="100px" />
        </div>
        <v-spacer></v-spacer>
        {{ new Date().getFullYear() }} — <strong>Covid Data</strong>
        <v-spacer></v-spacer>
        <v-btn
          style="text-transform: none;"
          color="primary"
          @click="openAbout()"
          text
          class="mr-10"
        >
          <span class="title">About</span>
        </v-btn>
      </v-footer>
    </v-card>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="title-about">
          About
        </v-card-title>
        <v-card-text>
          This app was developed by the Data Coffee team during the 2020 Nasa
          Space Apps Challenge, as an attempt to grow our foces through data in
          the fight agaisnt covid-19
          <v-divider class="py-3"></v-divider>
          Novel Corona Virus (COVID-19) epidemiological data since 22 January
          2020. The data is compiled by the Johns Hopkins University Center for
          Systems Science and Engineering (JHU CCSE) from various sources
          including the World Health Organization (WHO), DXY.cn, BNO News,
          National Health Commission of the People’s Republic of China (NHC),
          China CDC (CCDC), Hong Kong Department of Health, Macau Government,
          Taiwan CDC, US CDC, Government of Canada, Australia Government
          Department of Health, European Centre for Disease Prevention and
          Control (ECDC), Ministry of Health Singapore (MOH), and others. JHU
          CCSE maintains the data on the 2019 Novel Coronavirus COVID-19
          (2019-nCoV) Data Repository on Github.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Ok
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import "animate.css";
import Collaborators from "@/components/Collaborators";

export default {
  name: "App",
  components: {
    Collaborators
  },
  data: () => ({
    dialog: false,
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
    openAbout() {
      this.dialog = !this.dialog;
      console.log("sobre nós");
    },
    goAndSend() {
      if (this.item) this.$vuetify.goTo("#data");
    }
  }
};
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
.bg-white {
  background: white;
  padding-top: 50px;
}
.app {
  overflow: hidden;
}
.bg {
  background-image: url("./assets/background.jpg") !important;
  background-position: bottom;
  background-size: cover;
}
.card-chose {
  text-align: center;
  background: #0e3e4c !important;
}

.title-choose {
  color: #1a8a92;
  font-size: 2rem;
  font-weight: bold;
}

.subtitle-choose {
  color: white;
}

.title-about {
  color: #1a8a92;
}

.collaborators {
  background: white;
}

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
