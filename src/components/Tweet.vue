<template>
  <article id="tweet" class="media">
    <div id="retweet">Tweet is Retweet: {{ isRetweet }}</div>
    <div id="text">Tweet: {{ text }}</div>
    <div id="author-name">Author name:  {{ authorName }}</div>
    <div id="author-screenname">Author screenname:  {{ authorScreenName }}</div>
    <div id="author-url">Author URL:  {{ authorUrl }}</div>
  </article>
</template>

<script>
  export default {
    name: 'tweet',
    props: [ // props receiving from
      'isRetweet',
      'text',
      'authorName',
      'authorScreenName',
      'authorUrl',
    ],
  };
</script>