<template>
  <v-card
      class="mx-auto overflow-hidden"
  >
    <v-app-bar
        color="deep-purple"
        dark
    >
      <v-icon
          dense
          large
          class="mr-5"
      >mdi-calendar</v-icon>
      <v-toolbar-title>Calendar Application</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
    >
      <v-list
          nav
          dense
      >
        <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Account</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    icon: [
      'mdi-vuetify'
    ],
    drawer: false,
    group: null,
  }),
}
</script>
