<template>
  <q-page class="column">
    <div>
      <div>
        <q-img src="~assets/mainPage.jpg" style="object-fit: cover; width: 100%; height: 820px;"></q-img>
      </div>
      <q-card flat style="max-width: 940px;">
        <div class=" marquee" style="height: 60px">
          <span class="marquee-text text-bold">
            new PRODUCT OPEN.7% SALES/S PRODUCT ALL VIEW YOUR ITEM!
            new PRODUCT OPEN.7% SALES/S PRODUCT ALL VIEW YOUR ITEM!
          </span>
        </div>
      </q-card>
      <div class="column q-my-xl items-center">
        <span class="text-h4 text-bold q-mb-md">TrendPick</span>
        <span>The name "trendPick" reflects our mission to help customers discover and pick the latest trends
          effortlessly.</span>
        <span>We curate a selection of high-quality, fashionable items at reasonable prices,</span>
        <span>carefully chosen to align with the latest styles.</span>
        <span class="q-my-md">Our goal is to help everyone find their unique style with confidence and ease.</span>
      </div>
      <div class="row q-col-gutter-xs q-row-gutter-md justify-center">
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 q-mt-xl" v-for="(product, i) in products" :key="product.name">
          <q-card flat @click="toDetail(i)" class="q-pa-sm cursor-pointer">
            <q-img src="~assets/miniskirt.jpg" width="100%" style="height: 600px; object-fit: cover;"></q-img>
            <div class="row q-mt-md justify-between">
              <div>{{ product.name }}</div>
              <div>KRW {{ product.price }}</div>
            </div>
          </q-card>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';



const $route = useRoute()
const $router = useRouter()
// function toDetail(product) {
//   $router.push({
//     name: 'detail', // 라우터 이름 사용
//     params: { id: product.name }, // 상품의 고유 정보 전달 (예: name)
//   });
// }

function toDetail(product) {
  $router.push(`detail?id=${product}`);
}

const products = ref([
  {
    name: "t-shirt",
    price: "30,000",
    description: "땀 흡수 ㅈ됨"
  },
  {
    name: "hoodie",
    price: "50,000",
    description: "두꺼운 원단, 겨울용"
  },
  {
    name: "jeans",
    price: "40,000",
    description: "슬림 핏, 편안한 착용감"
  },
  {
    name: "sneakers",
    price: "70,000",
    description: "내구성 좋은 고무 밑창"
  },
  {
    name: "cap",
    price: "20,000",
    description: "가볍고 통풍 잘됨"
  },
  {
    name: "jacket",
    price: "80,000",
    description: "방수 기능, 야외 활동에 적합"
  },
  {
    name: "socks",
    price: "5,000",
    description: "땀 흡수 잘되고 부드러운 착용감"
  },
  {
    name: "scarf",
    price: "25,000",
    description: "울 혼합, 따뜻하고 부드러움"
  },
  {
    name: "belt",
    price: "15,000",
    description: "고급 가죽, 내구성 뛰어남"
  },
  {
    name: "gloves",
    price: "30,000",
    description: "방한용, 터치 스크린 지원"
  }
]);

const category = ref('')
onMounted(()=>{
  category.value = $route.query.cat
  console.log(category.value)
})


</script>

<style>
.marquee {
  white-space: nowrap;
  overflow: hidden;
}

.marquee-text {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 30s linear infinite;
  font-size: 3rem;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
</style>
