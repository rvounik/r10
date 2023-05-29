<script setup>
import AutoColumns from '../../components/AutoColumns/AutoColumns.vue';
</script>

<template>
  <div class="inner_wrapper">
    <h2>About me</h2>
    <AutoColumns columns="2" ruleColor="#999">
      <p>Hi/hello, my name is Robbin and I'm a bit of a nerd 🤓 I grew up with the Commodore 64 and Amiga but was always fascinated by the vast amount of game consoles released, especially those from the 80's and 90's (the golden years of video gaming). In fact I'd keep a little list of consoles I would <strong>some day</strong> collect since I sure didnt have any money for it back then!</p>
      <p>So here I am, several decades later 🙈 Yes, I've kept my promise and actually possess all the consoles from the aforementioned list and many more! I made this website to share my collection and write all sorts of fun facts and trivia on them. Ofcourse, I will never have time for that, so it's just a list for now.</p>
      <h3>My own games</h3>
      <p>I wasnt just fascinated by the consoles and computers themselves, I also loved to see what technical tricks they could pull off. For example, the first <i>Mario Kart</i> on the Super Nintendo used this graphics mode they called <i>Mode 7</i> which is a fancy name for a sprite scaler. At some point I really wanted to know how that worked internally so I wrote a software version of it because I had become a Frontend developer. Fun times!</p>
      <p>And the same goes for many other of these 'game engines' I've come to know. Most of them never became "real" games, I usually got bored way before they became playable. But hey, you might still find it fun to click through a few of the examples I made. You can find most of the sources on <a href="https://www.github.com/rvounik" target="_blank">My Github</a>.</p>
      <h3>One more thing</h3>
      <p>Also, I wanted to learn Vue3 badly so I needed a little project to work on. This website seemed a perfect fit, as it was planned to be small in size and didnt require any backend (my webhost doesnt allow NodeJS and I felt everything else was simply overkill).</p>
      <p>It was really fun designing and writing this site from scratch and making it responsive and elegant in many ways. I hope you like the end result!</p>
    </AutoColumns>
  </div>
</template>

<style lang="scss" scoped>
.inner_wrapper {
  width: 100%;
  height: 100%;
  background: $white;
  text-align: center;
  padding: 1rem 1rem 1rem;
  overflow-y: auto;
  box-sizing: border-box;

  @media only screen and (min-width: $breakpoint-small) {
    padding: 2rem 1rem 1rem;
  }

  @media only screen and (min-width: $breakpoint-large) {
    padding: 4rem 2rem 2rem;
  }

  h2 {
    font-size: 2rem;
    padding-bottom: 1rem;
    display: inline-block;
    max-width: $width-hard-limit;
    width: 100%;
    color: $black-light;
    text-align: left;

    @media only screen and (min-width: $breakpoint-extra-large) {
      font-size: 2.5rem;
    }
  }

  h3 {
    margin-bottom: 0;
  }
  p {
    margin: 0 0 .5rem;
  }
}
</style>
