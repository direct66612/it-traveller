<script setup>
import LoginForm from "./components/Auth/LoginForm/LoginForm.vue";
import RegistrationForm from "./components/Auth/RegistrationForm/RegistrationForm.vue";
</script>

<template>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
</template>
