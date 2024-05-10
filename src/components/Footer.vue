<template>
  <footer id="sticky-footer" class="flex-shrink-0 py-4 bg-dark text-white-50" :class="{ 'show-footer': isFooterVisible }">
    <div class="container text-center">
      <small>Copyright 2024 &copy; Bacoor National High School - Georgetown</small>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isFooterVisible: false
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.offsetHeight;

      if (windowHeight + scrollTop >= bodyHeight - 10) {
        this.isFooterVisible = true;
      } else {
        this.isFooterVisible = false;
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.show-footer {
  display: block !important;
}
</style>
