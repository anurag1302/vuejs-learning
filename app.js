console.log("Hey There");

//data is a property as a function, that returns an object
//Vue supports multiple instances as below, there needs to be separate container, ex - div with ids app and app1

const vm = Vue.createApp({
  data() {
    return {
      firstName: "Johnny",
      lastName: "Doe",
    };
  },
  methods: {
    fullName() {
      return this.firstName + this.lastName;
    },
    todaysDate() {
      return new Date();
    },
  },
}).mount("#app");

//data properties on a view instance can be accessed in the JS file by wrapping the Vue instance in a variable or const,
//and then accessing them directly by varName.propName or varName.$data.propName
// $data is called a proxy
setTimeout(() => {
  vm.firstName = "Bobby";
  vm.$data.lastName = "Singh";
}, 2000);

Vue.createApp({
  data() {
    return {
      firstName: "Jade",
      lastName: "Jam",
    };
  },
}).mount("#app1");
