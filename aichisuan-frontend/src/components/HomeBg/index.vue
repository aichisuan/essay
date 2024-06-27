<template>
  <canvas ref="homeCanvasRef" />
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, reactive, ref } from 'vue';
// @ts-ignore
import bubbleImg from '../../assets/img/bubbles.png';

import { gsap } from '@/lib/gsapLib/index';


type BubbleItem = {
  dur: number;
  spriteDur: number;
  rotate: number;
  scaleX: number;
  scaleY: number;
  step: number;
  x: number;
  y: number;
  n: number;
};

const homeCanvasRef = ref(null);

const debounce = ref(undefined);

const m = reactive({
  x: 0,
  y: 0,
});

const bubbles = reactive<BubbleItem[]>([]);

const makeBubble = (auto: boolean = false) => {
  if (!debounce.value) return;
  // @ts-ignore
  if (debounce.value.progress() == 1 || auto) {
    // @ts-ignore
    debounce.value.play(0);

    const dist = gsap.utils.random(100, 200);
    const scale = window.innerWidth > 768 ? gsap.utils.random(0.4, 0.8) : gsap.utils.random(0.3, 0.6);
    const bItem = {
      dur: gsap.utils.random(3, 7),
      spriteDur: gsap.utils.random(0.12, 0.5),
      rotate: gsap.utils.random(-9, 9),
      scaleX: scale,
      scaleY: scale,
      step: 0,
      x: 0,
      y: 0,
      n: bubbles.length,
    };

    bubbles.push(bItem);

    gsap
      .timeline({ defaults: { ease: 'none' } })
      .fromTo(
        bItem,
        {
          //move bubbles along a random curve
          x: m.x - 75 * scale,
          y: m.y - 75 * scale,
        },
        {
          duration: bItem.dur,
          rotate: '+=' + gsap.utils.random(-5, 5, 1),
          motionPath() {
            return (
              'M' +
              bItem.x +
              ',' +
              bItem.y +
              'c' +
              gsap.utils.random(-dist, dist, 1) +
              ',' +
              gsap.utils.random(-dist, dist, 1) +
              ' ' +
              gsap.utils.random(-dist, dist, 1) +
              ',' +
              gsap.utils.random(-dist, dist, 1) +
              ' ' +
              gsap.utils.random(-dist, dist, 1) +
              ',' +
              gsap.utils.random(-dist, dist, 1)
            );
          },
        }
        // 0
      )
      .to(
        bItem,
        {
          //scale changes to add more variation
          duration: bItem.dur / 5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: 3,
          repeatRefresh: true,
          scaleX: () => scale + gsap.utils.random(-0.1, 0.1),
          scaleY: () => scale + gsap.utils.random(-0.1, 0.1),
        },
        bItem.dur / 5
      )
      .to(
        // 每个泡泡的动画 离开
        bItem,
        {
          duration: bItem.spriteDur,
          step: 8,
          snap: 'step',
        },
        bItem.dur - bItem.spriteDur * 2
      );
  }
};

const handlePointerMovedown = (e: PointerEvent) => {
  const { x, y } = e;
  // 中间的位置不生成泡泡
  if (x > window.innerWidth / 3 && x < (window.innerWidth / 3) * 2 && y > window.innerHeight / 3 && y < (window.innerHeight / 3) * 2) {
    return;
  }
  m.x = x;
  m.y = y;
  makeBubble(false);
};

const resizeCanvas = () => {
  const canvas = homeCanvasRef.value as unknown as HTMLCanvasElement;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

const initCanvas = () => {
  const canvas = homeCanvasRef.value as unknown as HTMLCanvasElement;
  const ctx = canvas.getContext('2d');
  const { innerWidth, innerHeight } = window;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  // @ts-ignore
  debounce.value = gsap.to(window, { duration: 0.07 });

  const img = new Image();

  img.src = bubbleImg;

  img.onload = () => {
    for (let i = 0; i < 10; i++) {
      //make a few bubbles to start
      m.x = gsap.utils.random(150, innerWidth - 150, 1);
      m.y = gsap.utils.random(150, innerHeight - 150, 1);
      makeBubble(true);
    }
  };

  window.addEventListener('pointerdown', handlePointerMovedown);
  window.addEventListener('pointermove', handlePointerMovedown);

  gsap.ticker.add(() => {
    if (!ctx) return;
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    bubbles.forEach((b) => {
      ctx.translate(b.x + b.scaleX * 75, b.y + b.scaleY * 75);
      ctx.rotate(b.rotate);
      ctx.drawImage(img, 0, b.step * 150, 150, 150, -b.scaleX * 75, -b.scaleY * 75, b.scaleX * 150, b.scaleY * 150);
      ctx.rotate(-b.rotate);
      ctx.translate(-b.x - b.scaleX * 75, -b.y - b.scaleY * 75);
    });
  });

  window.addEventListener('resize', resizeCanvas);
};

onMounted(() => {
  window && homeCanvasRef.value && initCanvas();
});

onUnmounted(() => {
  window.removeEventListener('pointerdown', handlePointerMovedown);
  window.removeEventListener('pointermove', handlePointerMovedown);
  window.removeEventListener('resize', resizeCanvas);
});
</script>

<style lang="less" scoped></style>
