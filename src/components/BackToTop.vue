<template>
  <el-backtop :target="target" :bottom="bottom" :right="right" :visibilityHeight="visibilityHeight" >
    回 到 顶 部
  </el-backtop>
</template>

<script>
export default {
  name: 'BackToTop',
  props: {
    target: {
      type: String,
      default: "#app"
    },
    right: {
      type: Number,
      default: 17
    },
    bottom: {
      type: Number,
      default: 180
    },
    visibilityHeight: {
      type: Number,
      default: 100
    }	
  }
}
</script>

<style scoped>
.el-backtop {
    height: auto;
    display: block;
    display: block;
    display: block;
    -webkit-box-align: unset;
    -ms-flex-align: unset;
    align-items: unset;
    -webkit-box-pack: unset;
    -ms-flex-pack: unset;
    justify-content: unset;
    -webkit-box-shadow: unset;
    box-shadow: unset;
  position: fixed;
  background-color: #FFFFFF;
  width: 24px;
  border-radius: 12px 0 0 12px;
  color: #808080;
  cursor: pointer;
  z-index: 5;
  padding: 12px 0 12px 5px;
  font-size: 14px;
  text-align: center;
}
</style>