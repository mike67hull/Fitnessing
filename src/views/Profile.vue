<template>
  <div class="calories">
    <h1>User Profile</h1>
    <i v-if="userId() != null">{{session.users[userId()].name}}</i>
  </div>
</template>