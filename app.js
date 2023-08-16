console.log("Hey There");

//data is a property as a function, that returns an object
//Vue supports multiple instances as below, there needs to be separate container, ex - div with ids app and app1
Vue.createApp({
  data() {
    return {
      firstName: "Johnny",
      lastName: "Doe",
    };
  },
}).mount("#app");

Vue.createApp({
  data() {
    return {
      firstName: "Jade",
      lastName: "Jam",
    };
  },
}).mount("#app1");
