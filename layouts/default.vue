<template>
  <div class="transs-wr">
    <div class="transs">
      <headline />
      <div class="main-wr">
        <div class="main">
          <slot />
        </div>
        <!-- <support v-if="!isStatusCode && showSupport" /> -->
      </div>
      <footerBlock />
    </div>
  </div>
</template>

<script>
import headline from "~/components/newHeader";
import footerBlock from "~/components/footer/footer";

export default {
  components: {
    headline,
    footerBlock,
  },
  data() {
    return {
      trans: "",
      ieDetected: false,
    };
  },
};
</script>
<style scoped>
.ie_block {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #111;
  flex-direction: column;
  font-size: 25px;
  background: #aaa;
  border-radius: 20px;
  width: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 15px;
}
.ie_block > div {
  font-weight: bold;
  margin-top: 20px;
  color: #333;
  display: flex;
}
.ie_block a:hover {
  color: #00aabb;
}
.ie_block img {
  width: 30px;
  height: 30px;
  margin-right: 15px;
}
</style>
