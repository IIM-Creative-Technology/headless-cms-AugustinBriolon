<template>
  <div class="nav-left">
    <div class="nav-left-item">
      <nuxt-link to="/" class="nav-left-link">Home</nuxt-link>
    </div>
    <div ref="line" class="nav-line"></div>
    <div class="nav-left-item nav-copyright">
      <div ref="name" class="copyright">Augustin Briolon</div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap';

export default {
  mounted() {
    gsap.from(this.$refs.line, {
      height: 0,
      duration: .5,
    });
    gsap.from(this.$refs.name, {
      x: -100,
      duration: 1,
    });
  },
};
</script>

<style lang="scss">
.nav-left {
  position: fixed;
  z-index: 600;
  display: flex;
  width: clamp(20px, 5vw, 130px);
  height: 100vh;
  padding-top: 5%;
  padding-bottom: 30px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 767px) {
    position: static;
    width: 100%;
    height: 80px;
    padding-bottom: 0px;
    padding-left: 0px;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .nav-left-item {
    margin-bottom: 40px;
    flex: 0 auto;
    transform: rotate(-90deg);

    @media screen and (max-width: 767px) {
      margin-bottom: 0px;
      transform: rotate(0deg);
    }

    .nav-left-link {
      display: block;
      border: 0px solid #000;
      transition: opacity 300ms ease;
      font-size: 10px;
      text-align: center;
      letter-spacing: 5px;
      text-decoration: none;
      text-transform: uppercase;

      &:hover {
      position: relative;
      overflow: hidden;
      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: 2px;
        background-image: linear-gradient(319deg,#ff794f,#ffd90f);
        animation: line 0.5s ease-in-out;
      }
      @keyframes line {
        0% {
          width: 0%;
        }
        100% {
          width: 100%;
        }
      }
    }
    }

    .copyright {
      width: 141px;
      font-size: 10px;
      font-weight: 500;
      text-align: center;
      white-space: nowrap;
      letter-spacing: 4px;
      cursor: vertical-text	;

      @media screen and (max-width: 767px) {
        text-align: right;
        cursor: default;
      }
    }
  }

  .nav-line {
    width: 1px;
    height: 100px;
    margin-top: 10px;
    margin-bottom: 80px;
    background-color: #1a1818;

    @media screen and (max-width: 767px) {
      width: 150px;
      height: 1px !important;
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }

  .nav-left-item.nav-copyright {
    position: absolute;
    left: 0%;
    top: auto;
    right: 0%;
    bottom: 3vh;

    @media screen and (max-width: 767px) {
      display: none;
    }
  }
}
</style>
