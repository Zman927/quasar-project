<template>
  <q-page class="flex flex-center">
    <q-card flat class="q-pa-md" style="border: 1px solid lightgrey;">
      <div class="text-bold text-subtitle1" style="min-width: 400px;">회원가입</div>
      <div>
        <q-input class="q-my-md" v-model="newIdInput" label="이메일" />
        <q-btn square class="full-width" unelevated color="black" text-color="white" label="인증"></q-btn>
      </div>
      <q-input class="q-my-md" v-model="checkEmail" label="인증번호 확인" />
      <q-input class="q-my-md" v-model="newPwInput" label="비밀번호" />
      <q-input class="q-my-md" v-model="checkPwInput" label="비밀번호 확인" />
      <q-input class="q-my-md" v-model="date" filled type="date" label="생년월일" />
      <q-btn square class="full-width q-mt-md" unelevated color="black" text-color="white" label="회원가입" />
    </q-card>
  </q-page>
</template>

<script setup>
// import { api } from 'src/boot/axios';
import { ref } from 'vue';

const newIdInput = ref();
const newPwInput = ref();
const checkPwInput = ref();
const checkEmail = ref();
const date = ref();

// function checkEmail() {
//     api.post('/auth/register', { email: id.value })
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((error) => {
//             console.error(error);
//         });
// }

</script>
