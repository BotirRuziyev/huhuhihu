<template>
  <div class="exchange-page">
    <div class="title">Надежный и безопасный <span>крипто-обменник</span></div>
    <div class="crypto-exchange">
      <form action="#" class="crypto-exchange__form">
        <div class="exchange-item__wrapper">
          <div class="exchange-item">
            <div class="exchange-head">
              <div class="label">Отдаете</div>
              <div class="min-and-max">
                <div class="min-val">Min. <span>5000.00</span></div>
                <div class="max-val">Max. <span>5000.00</span></div>
              </div>
            </div>
            <div class="form-control">
              <div class="form-input">
                <input v-model="handOver" @input="handOverInput" type="text" />
              </div>
              <div class="border-left"></div>
              <FormSelect
                :isSelect="isSelect"
                coinName="BTC"
                tokenStandard="BTC"
                :coinImg="bitcoin"
                :coins-list="coins"
              />
            </div>
            <div class="exchange-item__bottom"></div>
          </div>
          <button class="swap-btn">
            <img src="~assets/img/swap2.svg" alt="" />
          </button>
          <div class="exchange-item">
            <div class="exchange-head">
              <div class="label">Получаете</div>
            </div>
            <div class="form-control">
              <div class="form-input">
                <input v-model="receive" @input="receiveInput" type="text" />
              </div>
              <div class="border-left"></div>
              <FormSelect
                :isSelect="isSelect"
                coinName="USDT"
                tokenStandard="TRC20"
                :coinImg="usdt"
                :coins-list="coins"
              />
            </div>
            <div class="exchange-item__bottom"></div>
          </div>
        </div>
        <div class="crypto-exchange-form__bottom">
          <div class="form-group">
            <div class="form-control">
              <FormInput v-model="userName" placeholder="ФИО отправителя*" />
            </div>
            <div class="form-control">
              <FormInput placeholder="Email*" type="email" />
            </div>
            <div class="form-control">
              <FormInput
                placeholder="Карта сбербанка, от 16 до 18 цифр*"
                v-model="cardNumber"
                :mask="'#### #### #### #### ##'"
                :maxLength="22"
              />
            </div>
            <div class="form-control">
              <FormInput
                v-model="wallet"
                placeholder="Bitcoin кошелёк,от 28 до 42 символов*"
                :maxLength="42"
                :minLength="28"
              />
            </div>
            <div class="form-control">
              <FormInput v-model="promoCode" placeholder="Промокод" />
            </div>
            <div class="form-control">
              <button class="btn-round exchange-btn">Обменять</button>
            </div>
          </div>
          <div class="terms-consent">
            <FormSwitch />
            <span>
              Я согласен с <a href="https://basex.ru/tos/">условиями обмена</a
              > и с правилами <a href="https://basex.ru/amlkyc/"
                >AML проверки</a
              >
            </span>
          </div>
        </div>
      </form>
    </div>
    <div class="our-partners">
      <div class="our-partners__title">Наши партнеры:</div>
      <!-- <div class="our-partners__in swiper-container">
        <div class="our-partners__list swiper-wrapper">
          <div class="list-item swiper-slide">
            <img src="~assets/img/binance.svg" alt="" />
          </div>
          <div class="list-item swiper-slide">
            <img src="~assets/img/coinbase.svg" alt="" />
          </div>
          <div class="list-item swiper-slide">
            <img src="~assets/img/bitcoin2.svg" alt="" />
          </div>
          <div class="list-item swiper-slide">
            <img src="~assets/img/tether.svg" alt="" />
          </div>
          <div class="list-item swiper-slide">
            <img src="~assets/img/bitmex.svg" alt="" />
          </div>
          <div class="list-item swiper-slide">
            <img src="~assets/img/bestchange.svg" alt="" />
          </div>
        </div>
      </div> -->
      <client-only>
        <swiper
          :modules="modules"
          :slides-per-view="6"
          :space-between="10"
          :autoHeight="true"
          :loop="true"
          :autoplay="{ delay: 2500, disableOnInteraction: false }"
          :breakpoints="{
            0: {
              slidesPerView: 2.4,
            },
            576: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }"
          :navigation="false"
          class="our-partners__in"
        >
          <swiper-slide class="list-item">
            <img src="~assets/img/binance.svg" alt="" />
          </swiper-slide>
          <swiper-slide class="list-item">
            <img src="~assets/img/coinbase.svg" alt="" />
          </swiper-slide>
          <swiper-slide class="list-item">
            <img src="~assets/img/bitcoin2.svg" alt="" />
          </swiper-slide>
          <swiper-slide class="list-item">
            <img src="~assets/img/tether.svg" alt="" />
          </swiper-slide>
          <swiper-slide class="list-item">
            <img src="~assets/img/bitmex.svg" alt="" />
          </swiper-slide>
          <swiper-slide class="list-item">
            <img src="~assets/img/bestchange.svg" alt="" />
          </swiper-slide>
        </swiper>
      </client-only>
    </div>
    <div class="exchange-right__bg">
      <img src="~assets/img/bg-right.png" alt="" />
    </div>
    <div class="exchange-center__bg">
      <img src="~assets/img/bg-center.png" alt="" />
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import FormSelect from "~/components/exchange/form-select";
import FormInput from "~/components/form-input";
import FormSwitch from "~/components/form-switch";

import bitcoin from "@/assets/img/bitcoin.svg";
import usdt from "@/assets/img/usdt.svg";

export default {
  components: {
    Swiper,
    SwiperSlide,
    FormSelect,
    FormInput,
    FormSwitch,
  },
  data() {
    return {
      receive: "2 000",
      handOver: "0.00022399",
      isSelect: false,
      bitcoin: bitcoin,
      usdt: usdt,
      coins: [
        {
          id: 1,
          coinName: "BTC",
          tokenStandard: "BTC",
          img: bitcoin,
        },
        {
          id: 2,
          coinName: "USDT",
          tokenStandard: "TRC20",
          img: usdt,
        },
        {
          id: 3,
          coinName: "BTC",
          tokenStandard: "BTC",
          img: bitcoin,
        },
        {
          id: 4,
          coinName: "USDT",
          tokenStandard: "TRC20",
          img: usdt,
        },
        {
          id: 5,
          coinName: "BTC",
          tokenStandard: "BTC",
          img: bitcoin,
        },
        {
          id: 6,
          coinName: "USDT",
          tokenStandard: "TRC20",
          img: usdt,
        },
        {
          id: 7,
          coinName: "BTC",
          tokenStandard: "BTC",
          img: bitcoin,
        },
      ],
      userName: "",
      email: "",
      cardNumber: "",
      wallet: "",
      promoCode: "",
      modules: [Autoplay, Navigation],
    };
  },
  methods: {
    receiveInput(event) {
      let value = event.target.value;
      value = value.replace(/[^\d.]/g, "");
      let parts = value.split(".");
      if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1).join("");
      }
      let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      let decimalPart = parts[1] !== undefined ? "." + parts[1] : "";
      this.receive = integerPart + decimalPart;
    },
    handOverInput(event) {
      let value = event.target.value;
      value = value.replace(/[^\d.]/g, "");
      let parts = value.split(".");
      if (parts.length > 2) {
        value = parts[0] + "." + parts.slice(1).join("");
      }
      let integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      let decimalPart = parts[1] !== undefined ? "." + parts[1] : "";
      this.handOver = integerPart + decimalPart;
    },
  },
  // mounted() {
  //   this.swiper = new this.$swiper(".swiper-container", {
  //     modules: [this.$swiperAutoplay],
  //     autoHeight: true,
  //     loop: true,
  //     autoplay: {
  //       delay: 2500,
  //       disableOnInteraction: false,
  //     },
  //     breakpoints: {
  //       0: {
  //         slidesPerView: 2.4,
  //       },
  //       576: {
  //         slidesPerView: 3,
  //       },
  //       768: {
  //         slidesPerView: 4,
  //       },
  //       1024: {
  //         slidesPerView: 6,
  //       },
  //     },
  //   });
  // },
};
</script>
