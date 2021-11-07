<template>
  <div id="app">
    <v-app>
      <v-main>
        <notifications group="foo" />
        <Form />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Form from "./components/Form.vue";

export default {
  name: "App",
  components: {
    Form,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  box-sizing: border-box;
}

* {
  box-sizing: border-box;
}
</style>
