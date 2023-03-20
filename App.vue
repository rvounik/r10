<script setup>
import SiteGrid from './src/components/SiteGrid/SiteGrid.vue'
import Header from './src/components/SiteHeader/SiteHeader.vue'
import Menu from './src/components/SiteMenu/SiteMenu.vue'
import Content from './src/components/Content/Content.vue'
import Footer from './src/components/Footer/Footer.vue'
</script>

<template>
  <SiteGrid>
    <Header>
      <Menu></Menu>
    </Header>
    <Content>
      <router-view />
    </Content>
    <Footer/>
  </SiteGrid>
</template>
