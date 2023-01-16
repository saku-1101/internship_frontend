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
    <div class="check-boxs">
      <div
        v-for="prefecture in prefectures"
        :key="prefecture.prefCode"
        class="check-boxs__box"
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
  .check-boxs {
    display: flex;
    flex-wrap: wrap;
    &__box {
      margin-right: 8px;
    }
  }
</style>
