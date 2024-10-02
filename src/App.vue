<template>
  <header id="header-section">
    <div class="container">
        <div class="header">
          <img class="header-logo" src="./assets/Logo.svg" alt="Logoipsum">
          <ul class="header-menu" :class="{ open: isOpen }">
            <li class="header-menu__item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="header-menu__item">
              <router-link to="/features">Features</router-link>
            </li>
            <li class="header-menu__item">
              <router-link to="/pricing">Pricing</router-link>
            </li>
            <li class="header-menu__item">
              <router-link to="/blog">Blog</router-link>
            </li>
            <button class="header-menu__btn" :class="{ show: isShow }" @click="toggleBurger">Get Started</button>
          </ul>
          <button class="header-menu__btn">Get Started</button>
          <div class="burger-icon" :class="{ open: isOpen }" @click="toggleBurger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
    </div>
  </header>
  <section class="section">
    <router-view/>
  </section>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isOpen: false,
      isShow: false
    }
  },
  methods: {
    toggleBurger() {
      this.isOpen = !this.isOpen;
      this.isShow = !this.isShow;
      if (this.isOpen) {
        document.body.classList.add('no-scroll');
      } else {
        document.body.classList.remove('no-scroll');
      }
    }
  },
  mounted() {
    this.$router.beforeEach((to, from, next) => {
      this.isOpen = false;
      this.isShow = false;
      if (document.body.classList.contains('no-scroll')) {
        document.body.classList.remove('no-scroll');
      }
      next();
    });
  }
}
</script>

<style lang="scss">
$top-padding: 20px;
$height-header: 60px;
.no-scroll {
  overflow: hidden;
}
  #header-section {
    padding: $top-padding 0 100px 0;
    @media(max-width: 1000px) {
      padding-bottom: 50px;
    }
    .container {
      .header {
        background-color: #fff;
        display: flex;
        height: $height-header;
        justify-content: space-between;
        align-items: center;
        .header-logo {
          max-width: 200px;
        }
        .header-menu {
          display: flex;
          align-items: center;
          gap: 40px;
          color: #696871;
          font-size: 18px;
          font-weight: 700;
          line-height: normal;
          transition: left 0.5s ease;
          @media(max-width: 810px) {
            position: absolute;
            width: 100%;
            top: 80px;
            left: -100%;
            padding: 30px 0;
            gap: 30px;
            flex-direction: column;
            background-color: rgba(84, 84, 212, 0.8);
            height: calc(100% - $height-header);
            color: #fff;
          }
          &.open {
            left: 0;
          }
          .header-menu__item {
            position: relative;
            .router-link-active {
              color: #FF7143;
              & .header-menu__link {
                cursor: default;
              }
              &::after {
                position: absolute;
                content: '';
                left: 50%;
                bottom: -10px;
                width: 50px;
                height: 3px;
                background-color: #5454D4;
                transform: translateX(-50%);
              }
              @media(max-width: 810px) {
                color: #FF7143;
                &::after {
                  background-color: #fff;
                }
              }
            }
          }
          .header-menu__btn {
            display: none;
            &.show {
              display: block;
            }
          }
        }
        .header-menu__btn {
          background-color: #FF7143;
          width: 210px;
          padding: 20px 0;
          @media(max-width: 810px) {
            display: none;
          }
        }
        .burger-icon {
          display: none;
          width: 50px;
          height: 35px;
          position: relative;
          transform: rotate(0deg);
          transition: .5s ease-in-out;
          cursor: pointer;
          @media(max-width: 810px) {
            display: block;
          }
          & span {
            display: block;
            position: absolute;
            height: 5px;
            width: 100%;
            background: #000;
            border-radius: 5px;
            opacity: 1;
            left: 0;
            transform: rotate(0deg);
            transition: .25s ease-in-out;
            &:nth-child(1) {
              top: 0px;
            }
            &:nth-child(2),
            &:nth-child(3) {
              top: 15px;
            }
            &:nth-child(4) {
              top: 30px;
            }
          }
          &.open span:nth-child(1) {
            top: 18px;
            width: 0%;
            left: 50%;
          }
          &.open span:nth-child(2) {
            transform: rotate(45deg);
          }
          &.open span:nth-child(3) {
            transform: rotate(-45deg);
          }
          &.open span:nth-child(4) {
            top: 18px;
            width: 0%;
            left: 50%;
          }
        }
      }
    }
  }
</style>