<script setup>
import LoginForm from "./components/Auth/LoginForm/LoginForm.vue";
import RegistrationForm from "./components/Auth/RegistrationForm/RegistrationForm.vue";
import IModal from "./components/IModal/IModal.vue";
</script>

<template>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <IModal />
</template>
