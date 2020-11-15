<template lang="html">
  <div>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>
      Computed reversed message method: "{{ reversedMessageMethod('yay') }}"
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'hello world',
    }
  },
  computed: {
    // a computed getter
    reversedMessage() {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
  },

  methods: {
    reversedMessageMethod(prefix) {
      // `this` points to the vm instance
      return prefix + ' ' + this.message.split('').reverse().join('')
    },
  },
}
</script>

<style lang="css" scoped></style>
