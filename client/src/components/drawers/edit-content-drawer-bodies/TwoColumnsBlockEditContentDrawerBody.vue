<template>
    <InputUI v-model="form.title" label="ЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.subtitle" label="ПОДЗАГОЛОВОК" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.firstColumnText" label="ЛЕВЫЙ АБЗАЦ" type="textarea" placeholder="Введите заголовок" />
    <InputUI v-model="form.secondColumnText" label="ПРАВЫЙ АБЗАЦ" type="textarea" placeholder="Введите заголовок" />
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import { TwoColumnsBlockContent } from '@/types/pages';
import { defineComponent } from 'vue';
import EditContentDrawerBodyMixin from './EditContentDrawerBodyMixin';

interface Data {
    form: TwoColumnsBlockContent;
}

export default defineComponent({
    name: 'TwoColumnsBlockEditContentDrawerBody',
    components: { InputUI },
    mixins: [EditContentDrawerBodyMixin],

    data(): Data {
        return {
            form: {
                title: '',
                subtitle: '',
                firstColumnText: '',
                secondColumnText: '',
            },
        };
    },
});
</script>

<style lang="scss"></style>
