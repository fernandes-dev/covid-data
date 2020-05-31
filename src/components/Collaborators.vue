<template>
  <v-row
    class="my-10 animate__animated animate__backInLeft d-flex justify-center"
  >
    <div class="col-12 white--text mb-10">
      <h1>
        Collaborators
      </h1>
    </div>
    <v-col cols="12" sm="3" v-for="(item, i) in collaborators" :key="i">
      <div class="d-flex flex-column align-center">
        <v-hover v-slot:default="{ hover }" open-delay="200">
          <v-img
            class="img-perfil mb-3"
            width="200px"
            height="200px"
            :src="item.img"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex v-card--reveal display-1 "
                style="height: 100%;"
              >
                <v-btn
                  color="white"
                  x-large
                  icon=""
                  target="blank"
                  :href="item.linkedin"
                >
                  <v-icon x-large="">mdi-linkedin</v-icon>
                </v-btn>
              </div>
            </v-expand-transition>
          </v-img>
        </v-hover>
        <a target="blank" :href="item.linkedin" class="name">{{ item.name }}</a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    collaborators: [
      {
        name: "Eduardo Fernandes",
        img:
          "https://media-exp1.licdn.com/dms/image/C4E03AQG1NlxTbyTNUA/profile-displayphoto-shrink_200_200/0?e=1596672000&v=beta&t=OLcuWG0bJyxOBiAgPn8kHbm-ZqIOhQhnHxmrdYQF0ek",
        linkedin: "https://www.linkedin.com/in/fernandes-dev/"
      },
      {
        name: "Luciano Rolim",
        img:
          "https://media-exp1.licdn.com/dms/image/C4E03AQEug81BAx8JRA/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=ckRwNpgFJ2A852USZU1mRp5ElJdZxljW6ibI2VdftEA",
        linkedin: "https://www.linkedin.com/in/lucianomrolim/"
      },
      {
        name: "Lígia Soares",
        img:
          "https://media-exp1.licdn.com/dms/image/C5603AQEzjQ8xQ1MScg/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=dKB6w_Hdzx0IkfMhaoR6hO6u5lFG37RFd3MezaqJuHM",
        linkedin: "https://www.linkedin.com/in/soaresligia/"
      },
      {
        name: "Diéferson Bandinelli",
        img:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGcBFmhSLR_tQ/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=GK6lUkhrYtUbZ9P-rIwu1MDDDFudFJKFwUGpcf-TZfw",
        linkedin:
          "https://www.linkedin.com/in/di%C3%A9ferson-bandinelli-8aa703122/"
      }
    ]
  })
};
</script>

<style>
.img-perfil {
  border-radius: 50% !important;
  border: solid 2px #1a8a92;
}

.name {
  border-bottom: solid 2px #1a8a92;
  color: white !important;
  text-decoration: none;
}

.name:hover {
  color: #1a8a92 !important;
  transition: color 300ms !important;
  cursor: pointer;
}

.v-card--reveal {
  background: #1a8a92 !important;
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
