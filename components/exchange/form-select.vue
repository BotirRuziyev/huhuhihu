<template>
  <div class="form-select" ref="selectRef">
    <div
      class="select-btn"
      @click="isSelect = !isSelect"
      :class="isSelect ? 'active' : ''"
    >
      <div class="select-name">
        <div class="coin-name">{{ coinName }}</div>
        <span class="token-standard">{{ tokenStandard }}</span>
      </div>
      <div class="coin-img">
        <img :src="coinImg" :alt="coinName" />
      </div>
      <div class="select-arrown">
        <img src="~assets/img/icons/arrow-down.svg" alt="" />
      </div>
    </div>
    <div class="select-menu" :class="isSelect ? 'open-menu' : ''">
      <div class="select-menu__in">
        <div
          class="select-option"
          v-for="coin of coinsList"
          :key="coin.id"
          @click="changeSelect(coin)"
        >
          <div class="coin-img">
            <img :src="coin.img" alt="" />
          </div>
          <div class="select-name">
            <div class="coin-name">{{ coin.coinName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // isSelect: {
    //   typeof: Boolean,
    //   default: false,
    // },
    coinName: {
      typeof: String,
      default: "",
    },
    tokenStandard: {
      typeof: String,
      default: "",
    },
    coinImg: {
      typeof: String,
      default: "",
    },
    coinsList: Array,
  },
  emits: ["update:isSelect"],
  data() {
    return {
      selectRef: null,
      isSelect: false,
    };
  },
  methods: {
    // toggleSelect() {
    //   this.$emit("update:isSelect", !this.isSelect); // ✅ `isSelect` ni yangilash
    // },
    changeSelect() {
      this.isSelect = false;
    },
    closeOnClickOutside(event) {
      if (this.selectRef && !this.selectRef.contains(event.target)) {
        this.isSelect = false;
      }
    },
  },
  mounted() {
    this.selectRef = this.$refs.selectRef;
    document.addEventListener("click", this.closeOnClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeOnClickOutside);
  },
};
</script>
