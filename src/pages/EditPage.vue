<script>
import { store } from '../store';
import Editor from '@tinymce/tinymce-vue';
export default {
    components: {
        Editor,
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        
    },
    created() {
        const newContent = localStorage.getItem('content');
        if (newContent) {
            store.content = newContent;
        }
    },
    watch: {
        'store.content'() {
            localStorage.setItem('content', store.content)
        }
    }
    
}
</script>

<template>
    <div>
        <Editor v-model="store.content" api-key="a15p8ov346v5455gjpksa9x7eh8lixrk8e7k7b0bhgvf2iot" :init="{
                plugins: 'lists link image table code help wordcount'
            }" />
        <div class="text">
            {{ store.content }} 
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>