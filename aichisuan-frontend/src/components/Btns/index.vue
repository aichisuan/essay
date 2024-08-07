<template>
  <button class="custom-btn" :class="`btn-${btnId}`">
    <template v-if="normalIds.includes(btnId)">{{ text }}</template>
    <span v-if="needSpanIds.includes(btnId)">{{ text }}</span>
    <template v-if="needDoubleIds.includes(btnId)">
      <span>{{ text }}</span>
      <span>{{ text }}</span>
    </template>
  </button>
</template>

<script setup lang="ts">

defineProps({
  btnId: {
    type: Number,
    default: 1,
  },
  text: {
    type: String,
    required: true,
  },
});

const normalIds = [1, 2, 9, 10, 11, 13, 14, 15, 16];
const needSpanIds = [3, 4, 5, 6, 7, 8];
const needDoubleIds = [12];
</script>

<style lang="less" scoped>
.custom-btn {
  text-align: center;
  box-sizing: border-box;
  line-height: 100%;
  width: 100px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

/* 1 */
.btn-1 {
  background: rgb(6, 14, 131);
  background: linear-gradient(0deg, rgba(6, 14, 131, 1) 0%, rgba(12, 25, 180, 1) 100%);
  border: none;
  &:hover {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, rgba(0, 3, 255, 1) 0%, rgba(2, 126, 251, 1) 100%);
  }
}

/* 2 */
.btn-2 {
  background: rgb(96, 9, 240);
  background: linear-gradient(0deg, rgba(96, 9, 240, 1) 0%, rgba(129, 5, 240, 1) 100%);
  border: none;
  &:before {
    height: 0%;
    width: 2px;
  }
  &:hover {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.5), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2), inset 4px 4px 6px 0 rgba(0, 0, 0, 0.4);
  }
}

/* 3 */
.btn-3 {
  background: rgb(0, 172, 238);
  background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
  width: 100px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }
  &:after {
    width: 0%;
    height: 2px;
  }
  &:hover {
    background: transparent;
    box-shadow: none;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span:hover {
    color: rgba(2, 126, 251, 1);
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    background: rgba(2, 126, 251, 1);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 2px;
    height: 0%;
  }
  & span:after {
    width: 0%;
    height: 2px;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
}

/* 4 */
.btn-4 {
  background-color: #4dccc6;
  background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
  line-height: 42px;
  padding: 0;
  border: none;
  &:hover {
    background-color: #89d8d3;
    background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  }
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    top: 0;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 0.1px;
  }
  &:after {
    width: 0%;
    height: 0.1px;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    bottom: 0;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.9), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.9), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 0.1px;
    height: 0%;
  }
  & span:after {
    width: 0%;
    height: 0.1px;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
}

/* 5 */
.btn-5 {
  width: 100px;
  height: 40px;
  line-height: 42px;
  padding: 0;
  border: none;
  background: rgb(22,9,240);
  background: linear-gradient(0deg, rgba(22,9,240,1) 0%, rgba(49,110,244,1) 100%);
  &:hover {
    color: rgb(20, 10, 198);
    background: transparent;
    box-shadow: none;
  }
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 2px;
    width: 0;
    background: rgb(0,3,255);
    background: linear-gradient(0deg, rgba(2,126,251,1) 0%,  rgba(0,3,255,1)100%);
    transition: 400ms ease all;
  }
  &:after {
    right: inherit;
    top: inherit;
    left: 0;
    bottom: 0;
  }
  &:hover:before,
  &:hover:after {
    width: 100%;
    transition: 800ms ease all;
  }
}

/* 6 */
.btn-6 {
  background: rgb(247, 150, 192);
  background: radial-gradient(circle, rgba(247, 150, 192, 1) 0%, rgba(118, 174, 241, 1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    height: 0%;
    width: 1px;
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1), -4px -4px 5px 0px rgba(255, 255, 255, 1), 7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
  &:before {
    right: 0;
    top: 0;
    transition: all 500ms ease;
  }
  &:after {
    left: 0;
    bottom: 0;
    transition: all 500ms ease;
  }
  &:hover {
    background: transparent;
    color: #76aef1;
    box-shadow: none;
  }
  &:hover:before {
    transition: all 500ms ease;
    height: 100%;
  }
  &:hover:after {
    transition: all 500ms ease;
    height: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    box-shadow: -1px -1px 20px 0px rgba(255, 255, 255, 1), -4px -4px 5px 0px rgba(255, 255, 255, 1), 7px 7px 20px 0px rgba(0, 0, 0, 0.4), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  }
  & span:before {
    left: 0;
    top: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  & span:after {
    right: 0;
    bottom: 0;
    width: 0%;
    height: 0.5px;
    transition: all 500ms ease;
  }
  & span:hover:before {
    width: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
}

/* 7 */
.btn-7 {
  background: linear-gradient(0deg, rgba(255, 151, 0, 1) 0%, rgba(251, 75, 2, 1) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9), -4px -4px 5px 0px rgba(255, 255, 255, 0.9), 7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }
  &:after {
    width: 0%;
    height: 2px;
  }
  &:hover {
    color: rgba(251, 75, 2, 1);
    background: transparent;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: rgba(251, 75, 2, 1);
    box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9), -4px -4px 5px 0px rgba(255, 255, 255, 0.9), 7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
  }
  & span:before {
    width: 2px;
    height: 0%;
  }
  & span:after {
    height: 2px;
    width: 0%;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
}

/* 8 */
.btn-8 {
  background-color: #f0ecfc;
  background-image: linear-gradient(315deg, #f0ecfc 0%, #c797eb 74%);
  line-height: 42px;
  padding: 0;
  border: none;
  & span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
  }
  &:before,
  &:after {
    position: absolute;
    content: '';
    right: 0;
    bottom: 0;
    background: #c797eb;
    /*box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2),
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);*/
    transition: all 0.3s ease;
  }
  &:before {
    height: 0%;
    width: 2px;
  }
  &:after {
    width: 0%;
    height: 2px;
  }
  &:hover:before {
    height: 100%;
  }
  &:hover:after {
    width: 100%;
  }
  &:hover {
    background: transparent;
  }
  & span:hover {
    color: #c797eb;
  }
  & span:before,
  & span:after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    background: #c797eb;
    /*box-shadow:  4px 4px 6px 0 rgba(255,255,255,.5),
              -4px -4px 6px 0 rgba(116, 125, 136, .2),
    inset -4px -4px 6px 0 rgba(255,255,255,.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, .3);*/
    transition: all 0.3s ease;
  }
  & span:before {
    width: 2px;
    height: 0%;
  }
  & span:after {
    height: 2px;
    width: 0%;
  }
  & span:hover:before {
    height: 100%;
  }
  & span:hover:after {
    width: 100%;
  }
}

/* 9 */
.btn-9 {
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
  &:after {
    position: absolute;
    content: ' ';
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #1fd1f9;
    background-image: linear-gradient(315deg, #1fd1f9 0%, #b621fe 74%);
    transition: all 0.3s ease;
  }
  &:hover {
    background: transparent;
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
    color: #fff;
  }
  &:hover:after {
    transform: scale(2) rotate(180deg);
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5), inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  }
}

/* 10 */
.btn-10 {
  background: rgb(22, 9, 240);
  background: linear-gradient(0deg, rgba(22, 9, 240, 1) 0%, rgba(49, 110, 244, 1) 100%);
  color: #fff;
  border: none;
  transition: all 0.3s ease;
  overflow: hidden;
  &:after {
    position: absolute;
    content: ' ';
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    transform: scale(0.1);
  }
  &:hover {
    color: #fff;
    border: none;
    background: transparent;
  }
  &:hover:after {
    background: rgb(0, 3, 255);
    background: linear-gradient(0deg, rgba(2, 126, 251, 1) 0%, rgba(0, 3, 255, 1) 100%);
    transform: scale(1);
  }
}

/* 11 */
.btn-11 {
  border: none;
  background: rgb(251, 33, 117);
  background: linear-gradient(0deg, rgba(251, 33, 117, 1) 0%, rgba(234, 76, 137, 1) 100%);
  color: #fff;
  overflow: hidden;
  &:hover {
    text-decoration: none;
    color: #fff;
  }
  &:before {
    position: absolute;
    content: '';
    display: inline-block;
    top: -180px;
    left: 0;
    width: 30px;
    height: 100%;
    background-color: #fff;
    animation: shiny-btn1 3s ease-in-out infinite;
  }
  &:hover {
    opacity: 0.7;
  }
  &:active {
    box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3), -4px -4px 6px 0 rgba(116, 125, 136, 0.2), inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2), inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
  }
}

@keyframes shiny-btn1 {
  0% {
    transform: scale(0) rotate(45deg);
    opacity: 0;
  }
  80% {
    transform: scale(0) rotate(45deg);
    opacity: 0.5;
  }
  81% {
    transform: scale(4) rotate(45deg);
    opacity: 1;
  }
  100% {
    transform: scale(50) rotate(45deg);
    opacity: 0;
  }
}

/* 12 */
.btn-12 {
  position: relative;
  right: 26px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 100px;
  height: 40px;
  line-height: 42px;
  perspective: 230px;
  & span {
    background: rgb(0, 172, 238);
    background: linear-gradient(0deg, rgba(0, 172, 238, 1) 0%, rgba(2, 126, 251, 1) 100%);
    display: block;
    position: absolute;
    width: 100px;
    height: 40px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  & span:nth-child(1) {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transform: rotateX(90deg);
    transform-origin: 50% 50% -20px;
  }
  & span:nth-child(2) {
    transform: rotateX(0deg);
    transform-origin: 50% 50% -20px;
  }
  &:hover span:nth-child(1) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transform: rotateX(0deg);
  }
  &:hover span:nth-child(2) {
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    color: transparent;
    transform: rotateX(-90deg);
  }
}

/* 13 */
.btn-13 {
  background-color: #89d8d3;
  background-image: linear-gradient(315deg, #89d8d3 0%, #03c8a8 74%);
  border: none;
  z-index: 1;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #4dccc6;
    background-image: linear-gradient(315deg, #4dccc6 0%, #96e4df 74%);
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    top: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
}

/* 14 */
.btn-14 {
  background: rgb(255, 151, 0);
  border: none;
  z-index: 1;
  &:after {
    position: absolute;
    content: '';
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
    z-index: -1;
    border-radius: 5px;
    background-color: #eaf818;
    background-image: linear-gradient(315deg, #eaf818 0%, #f6fc9c 74%);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    top: auto;
    bottom: 0;
    height: 100%;
  }
  &:active {
    top: 2px;
  }
}

/* 15 */
.btn-15 {
  background: #b621fe;
  border: none;
  z-index: 1;
  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #663dff;
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: #fff;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
}

/* 16 */
.btn-16 {
  border: none;
  color: #000;
  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9, 7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  &:hover {
    color: #000;
  }
  &:hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  &:active {
    top: 2px;
  }
}


</style>
