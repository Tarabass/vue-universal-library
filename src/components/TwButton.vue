<!-- equivalent TwButton component as vue template (this is just for reference) -->
<template>
  <button
    type="button"
    :disabled="disabled"
    class="btn"
    :class="{
      'btn-flex': flex,
      'opacity-50 cursor-not-allowed': disabled,
      '!rounded-full': pill,
      'border': bordered,
      'border-dark': bordered && bg === 'clear',
      'border-primary-dark': bordered && bg === 'fill',
      'btn-clear': bg === 'clear',
      'btn-fill': bg === 'fill'
    }"
    @click="$emit('click', $event)"
  >
    <span class="btn-contents">
      <span
        v-if="icon"
        class="icon material-icons"
        :class="{ 'ml-[-2px] mr-1.5': !!$slots.default }"
        >{{ icon }}</span
      >
      <span>
        <slot></slot>
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = defineProps({
  bg: {
    type: String,
    default: 'fill',
    validator: (value: string) => value === 'fill' || value === 'clear'
  },
  bordered: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  flex: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  },
  pill: {
    type: Boolean,
    default: false
  }
})
</script>
