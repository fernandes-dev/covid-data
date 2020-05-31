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
        <v-icon>mdi-information-outline</v-icon>
        <span class="title">About</span>
      </v-btn>
    </v-app-bar>
    <v-content class="bg d-flex">
      <router-view></router-view>
    </v-content>
    <div class="card-chose px-5 ">
      <v-card
        width="100%"
        tile
        elevation="0"
        class="pt-10 card-chose animate__animated animate__bounceInDown"
      >
        <div ref="filter" id="#filter" class="title-choose">
          What are you looking for?
        </div>
        <div class="subtitle-choose">
          You can pick from the list above or find it through the search bar
        </div>
      </v-card>
      <v-card
        width="100%"
        tile
        elevation="0"
        height="300px"
        class="ma-0 card-chose animate__animated animate__bounceInDown"
      >
        <div class="subtitle-choose">
          Espaço reservado para power bi
        </div>
      </v-card>
      <Collaborators />
    </div>
    <v-card tile="">
      <v-footer class="font-weight-medium d-flex justify-center" height="130px">
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
          <v-icon>mdi-information-outline</v-icon>
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
    dialog: false
  }),
  methods: {
    openAbout() {
      this.dialog = !this.dialog;
      console.log("sobre nós");
    }
  }
};
</script>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
.app {
  overflow: hidden;
  background: #0e3e4c !important;
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
</style>
