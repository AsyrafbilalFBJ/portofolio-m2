<template>
  <div>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600&display=swap" rel="stylesheet">
    <NavHeader/>
    <router-view/>
    <ContactFooter/>
  </div>
</template>

<script>
import NavHeader from './components/NavHeader.vue'
import ContactFooter from './components/ContactFooter.vue'

export default {
  name: 'App',
  components: {
    NavHeader,
    ContactFooter
  }
}
</script>

<style>
body {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
@media only screen and (max-width: 600px) {
  body {
    overflow-x: hidden;
  }
}
.mg-25{
  margin: 28vh 0 28vh 0;
}
.mg-10{
  margin: 10vh 0 10vh 0;
}
.sd{
  box-shadow: 12px 14px 19px rgba(0, 0, 0, 0.18);
}
.ol{
  box-shadow:
  0 0 0 5px white,
  0 0 0 10px #0D6EFD;
}
.navb{
  border: 5px solid red;
}
</style>
