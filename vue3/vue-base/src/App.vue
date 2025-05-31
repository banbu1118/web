<template>
  <h3>模板语法</h3>
  <p>{{ msg }}</p>
  <p>{{ hello }}</p>
  <p>{{ number + 10 }}</p>
  <p>{{ ok ? 'YES' : 'NO' }}</p>
  <p>{{ message.split("").reverse().join("") }}</p>
  <!-- <p>{{ var 1= 1 }}</p> -->
  <p>{{ rawHtml }}</p>
  <p v-html="rawHtml"></p>
</template>

<script>
export default {
  data() {
    return {
      msg: "神奇的语法",
      hello: "hello world",
      number: 10,
      ok: true,
      message: "大家好",
      rawHtml: "<a href='https://www.baidu.com'>百度</a>"
    }
  }
}
</script>
