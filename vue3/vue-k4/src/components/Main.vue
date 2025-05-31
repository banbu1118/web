<template>
    <h3>Main</h3>
    <p>搜索内容：{{ search }}</p>
    <SearchComponent @searchEvent="getSearch" />
</template>

<script>
import SearchComponent from './SearchComponent.vue'
export default {
    data() {
        return {
            search: ""
        }
    },
    components: {
        SearchComponent
    },
    methods: {
        getSearch(data) {
            this.search = data
        }
    }
}
</script>