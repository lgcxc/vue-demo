<template>
  <div>
    <UserProfile v-for="item in list" :key='item' :name='item' />
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile";

export default {
  name: "Home",
  components: { UserProfile },
  data() {
    return {
      list: Array(5000)
        .fill(null)
        .map((_, idx) => "Test" + idx),
    };
  },
  beforeMount() {
    this.start = Date.now();
  },
  mounted() {
    console.log("用时:", Date.now() - this.start);
  },
};
</script>
