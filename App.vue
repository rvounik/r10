<script setup>
import SiteGrid from './src/components/SiteGrid/SiteGrid.vue'
import Header from './src/components/SiteHeader/SiteHeader.vue'
import Menu from './src/components/SiteMenu/SiteMenu.vue'
import Footer from './src/components/Footer/Footer.vue'
</script>

<template>
  <SiteGrid>
    <Header>R10</Header>
    <Menu></Menu>
    <router-view />
    <Footer/>
  </SiteGrid>
</template>
