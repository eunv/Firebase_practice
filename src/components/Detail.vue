<template>
  <div>
    <h2> <b>학적사항 조회</b></h2>
    <button type="button" class="btn btn-mdb-color">삭제</button>
    <button type="button" class="btn btn-mdb-color">수정</button>
    <button type="button" class="btn btn-mdb-color" @click = 'goHome'>확인</button>

  </div>
</template>

<script>
export default {
  name: 'detail',
  data() {
    return {

    }
  },
  methods : {
    goHome() {
      const self = this;
      self.$router.push({name: 'home'})
    }


  },

}
</script>

<style>

</style>