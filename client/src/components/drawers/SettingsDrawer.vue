<template>
    <el-drawer
        class="edit-content__drawer"
        v-model="drawerVisibility"
        size="710px"
        :with-header="false"
        direction="ltr"
        :close-on-click-modal="false"
    >
        <div class="drawer__buttons-wrap">
            <ButtonUI text="Отмена" drawer secondary @click="toggleDrawer" />
            <ButtonUI text="Сохранить и закрыть" drawer @click="toggleDrawer" />
        </div>

        <div class="edit-drawer__body">
            <component :is="drawerBody" />
        </div>
    </el-drawer>
</template>

<script lang="ts">
import InputUI from '@/components/ui/InputUI.vue';
import ButtonUI from '@/components/ui/ButtonUI.vue';
import MainBlockSettingsDrawerBody from './settings-drawer-bodies/MainBlockSettingsDrawerBody.vue';
import DefaultSettingsDrawerBody from './settings-drawer-bodies/DefaultSettingsDrawerBody.vue';
import { Component, defineComponent } from 'vue';
import { BlockType } from '@/types/pages';

export default defineComponent({
    name: 'SettingsDrawer',
    components: { InputUI, ButtonUI, MainBlockSettingsDrawerBody },

    computed: {
        currentBlockType(): BlockType {
            return this.$store.getters['drawers/getCurrentBlock'];
        },
        drawerName(): string {
            return this.$options.name as string;
        },
        drawerBody(): Component {
            const drawerBodies: Record<BlockType, Component> = {
                main: MainBlockSettingsDrawerBody,
                title: DefaultSettingsDrawerBody,
                twoColumns: DefaultSettingsDrawerBody,
            };
            return drawerBodies[this.currentBlockType];
        },
        drawerVisibility: {
            get(): boolean {
                return this.$store.getters['drawers/getDrawerVisibility'](this.drawerName);
            },
            set(): void {
                this.drawerVisibility && this.toggleDrawer();
            },
        },
    },

    methods: {
        toggleDrawer(): void {
            this.$store.commit('drawers/toggleDrawer', this.drawerName);
        },
    },
});
</script>

<style lang="scss">
.edit-content__drawer {
    @media (max-width: 709.99px) {
        .el-drawer__body {
            width: 100vw;
        }
    }

    .edit-drawer__body {
        max-width: 620px;
        margin: 0 auto;
        padding: 48px 20px;
        display: flex;
        flex-direction: column;
        gap: 32px;
    }

    .drawer__buttons-wrap {
        display: flex;
    }
}
</style>