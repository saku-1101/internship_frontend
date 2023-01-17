<script setup lang="ts">
  import { Prefecture } from '@/service/models/pref.interface'

  defineProps<{
    prefectures: Prefecture[]
  }>()
  defineEmits(['pref-clicked'])
</script>

<template>
  <div>
    <h2>都道府県</h2>
    <div id="check-boxes">
      <div
        v-for="prefecture in prefectures"
        id="check-boxes__box"
        :key="prefecture.prefCode"
      >
        <input
          type="checkbox"
          :name="prefecture.prefName"
          @click="$emit('pref-clicked', prefecture.prefCode, prefecture.prefName)"
        />
        <label :for="prefecture.prefCode.toString()">{{
          prefecture.prefName
        }}</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  #check-boxes {
    display: flex;
    flex-wrap: wrap;
    &__box {
      margin-right: 8px;
    }
  }
</style>
