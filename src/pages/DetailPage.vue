<template>
  <q-page class="flex flex-center column q-pa-md">
    <q-img src="~assets/miniskirt.jpg" width="500px"></q-img>
    <q-card flat class="q-mt-md">
      <div class="text-bold text-subtitle1">
        <div>{{ productId }}</div>
        <div>[당일배송] 3기장 H라인 베이직 스커트</div>
        <div class="row justify-between q-mt-md">
          <span>PRICE</span>
          <span>KRW 30,000</span>
        </div>
        <q-select class="q-my-md" square filled v-model="selectedSize" :options="options" :label="currentLabel"
          emit-value map-options="" />
      </div>
      <div class="row full-widthf justify-between">
        <q-btn square unelevated color="dark" label="Buy Now" />
        <q-btn square unelevated color="dark" label="Add to cart" />
      </div>
    </q-card>
    <!-- <div class="row justify-around">

      <div class="text-bold text-subtitle1">{{ product.name }}</div>
      <div class="text-bold text-subtitle1">{{ product.price }}</div>
    </div> -->
  </q-page>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const $route = useRoute();
const productId = ref()
const selectedSize = ref(null);
// const addToCart = ref();

const options = ref([
  { label: 'Small', value: 'S' },
  { label: 'Medium', value: 'M' },
  { label: 'Large', value: 'L' }
]);

const currentLabel = computed(() =>
  selectedSize.value ? `선택된 사이즈: ${selectedSize.value} ` : "사이즈를 선택하세요"
);
// axios.get(`getProduct/${productId.value}`).then((res) => {
//   productData.value = res.data
// })

onMounted(() => {
  productId.value = $route.query.id
})

</script>
