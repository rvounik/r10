<script setup>
import { onMounted } from 'vue';
import ArticleWrapper from '../../components/ArticleWrapper/ArticleWrapper.vue';

onMounted(async () => {
  const elem = document.getElementById('email');
  const originalText = elem.textContent;

  elem.textContent = originalText.split('').reverse().join('');
});
</script>

<template>
  <div class="inner-wrapper">
      <ArticleWrapper>
        <h2 class="contact-type">Contact</h2>
        <p class="contact-type">
          If you'd like to get in touch with me you can send an e-mail to:

          <a id="email">ln.jioonav@etisbew</a>
        </p>
        <br/>
        <br/>
        <br/>
        <p class="contact-type">
          Furthermore you can find me online in the following places:
        </p>
        <br/>
        <br/>
        <ul class="links">
          <li><a href="https://www.github.com/rvounik" target="_blank">Github</a></li>
          <li><a href="https://www.linkedin.com/in/robbinvanooij/" target="_blank">LinkedIn</a></li>
        </ul>
      </ArticleWrapper>
    </div>
</template>

<style lang="scss" scoped>
/* todo: consider making a component out of inner-wrapper, too */
.inner-wrapper {
  width: 100%;
  height: 100%;
  background: #009286;
  text-align: center;
  padding: 1rem 1rem 1rem;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;

  @media only screen and (min-width: $breakpoint-small) {
    padding: 1.5rem 1rem 1rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 2rem 2rem 2rem;
  }
}

.contact-type {
  color: $white;
  font-family: Arial;
  text-align: left;
}

#email {
  display: block;
  margin-top: 2rem;
  color: yellow;
}

.links {
  display: block;
  text-align: left;

  li a {
    color: yellow;
  }
}
</style>
