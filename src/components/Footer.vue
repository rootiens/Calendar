<template>
  <v-card>
    <v-footer
        v-bind="localAttrs"
        :padless="padless"
    >
      <v-card
          flat
          tile
          width="100%"
          class="deep-purple text-center"
      >
        <v-card-text>
          <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4"
              icon
              dark
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider dark></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Rootiens</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    icons: [
      'mdi-vuetify',
    ],
    items: [
      'default',
      'absolute',
      'fixed',
    ],
    padless: true,
    variant: 'fixed',
  }),
  computed: {
    localAttrs () {
      const attrs = {}

      if (this.variant === 'default') {
        attrs.absolute = false
        attrs.fixed = false
      } else {
        attrs[this.variant] = true
      }
      return attrs
    },
  },
}
</script>