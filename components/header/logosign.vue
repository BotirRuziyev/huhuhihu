<template>
  <div @click.stop>
    <transition name="faded">
      <div class="registration">
        <ul>
          <li>
            <button
              class="btn-round btn-round-transparent"
              @click="setReg(true)"
            >
              Регистрация
            </button>
          </li>
          <li>
            <button class="btn-round btn-round-white" @click="setLogin(true)">
              Войти
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script>
export default {};
</script>
