<template>
  <v-row
    class="my-10 animate__animated animate__backInLeft d-flex justify-center"
  >
    <div class="col-12 d-flex justify-center mb-10">
      <h1 class="collaborators-panel">
        Collaborators
      </h1>
    </div>
    <v-col cols="12" sm="4" md="2" v-for="(item, i) in collaborators" :key="i">
      <div class="d-flex flex-column align-center">
        <v-hover v-slot:default="{ hover }" open-delay="0">
          <v-img
            class="img-perfil mb-3"
            width="200"
            height="200"
            :src="item.img"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="v-card--reveal d-flex flex-column justify-center pa-2"
                style="height: 100%;"
              >
                <div class="pt-8 description" v-html="item.description"></div>
                <v-btn
                  target="blank"
                  :href="item.linkedin"
                  color="white"
                  x-large=""
                  text
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
        name: "Thiago Tavares",
        img:
          "https://media-exp1.licdn.com/dms/image/C4D03AQELto1Jo7niAg/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=4yMjJHZvzUGdYH0O8PKW6jX6uGsIfwqAiez_RW7AY8U",
        linkedin: "https://www.linkedin.com/in/thiago-tavares-98813a32/",
        description: "UI designer in SmartMEI"
      },
      {
        name: "Eduardo Fernandes",
        img:
          "https://pbs.twimg.com/profile_images/1209702731176382471/-hymx7JM_400x400.jpg",
        linkedin: "https://www.linkedin.com/in/fernandes-dev/",
        description:
          "NodeJs & VueJs Developer | Founder of <a href='http://scriptn.com.br/' target='blank' class='white--text'>ScriptN</a>"
      },
      {
        name: "Luciano Rolim",
        img:
          "https://media-exp1.licdn.com/dms/image/C4E03AQEug81BAx8JRA/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=ckRwNpgFJ2A852USZU1mRp5ElJdZxljW6ibI2VdftEA",
        linkedin: "https://www.linkedin.com/in/lucianomrolim/",
        description: "Investment Operations Analyst"
      },
      {
        name: "Lígia Soares",
        img:
          "https://media-exp1.licdn.com/dms/image/C5603AQEzjQ8xQ1MScg/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=dKB6w_Hdzx0IkfMhaoR6hO6u5lFG37RFd3MezaqJuHM",
        linkedin: "https://www.linkedin.com/in/soaresligia/",
        description:
          "Cyber Security Analyst at TIVIT | Ethical Hacker in Progress | Cyber Security Student"
      },
      {
        name: "Diéferson Bandinelli",
        img:
          "https://media-exp1.licdn.com/dms/image/C4E03AQGcBFmhSLR_tQ/profile-displayphoto-shrink_800_800/0?e=1596672000&v=beta&t=GK6lUkhrYtUbZ9P-rIwu1MDDDFudFJKFwUGpcf-TZfw",
        linkedin:
          "https://www.linkedin.com/in/di%C3%A9ferson-bandinelli-8aa703122/",
        description: "Co-founder & Product Lead in Juddi"
      }
    ]
  })
};
</script>

<style>
.collaborators-panel {
  color: #188a92;
}
.img-perfil {
  border-radius: 50% !important;
}

.name {
  color: rgba(0, 0, 0, 0.815) !important;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
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

.description {
  font-size: 14px;
  color: white;
  font-weight: bold;
  display: block;
  text-align: center;
}
</style>
