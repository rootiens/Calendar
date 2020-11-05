 <template>
  <v-app>
    <v-main>
      <Nav/>
      <calendar/>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav';
import Calendar from './components/Calendar';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Nav, Calendar, Footer
  },

  data: () => ({
    //
  }),
};
</script>
 <style>
 html { overflow-y: auto }
 </style>