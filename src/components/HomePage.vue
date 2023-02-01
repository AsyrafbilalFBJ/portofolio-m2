<template>
  <div>
    <WorkGreet/>
    <SomeStuff/>
  </div>
</template>

<script>
import WorkGreet from './WorkGreet.vue'
import SomeStuff from './SomeStuff.vue'

export default {
    name: 'HomePage',
    components: {
        WorkGreet,
        SomeStuff
    }
}
</script>

<style>

</style>