<template>
  <main id="tweet-list">
    <h1 class="">Tweets List</h1>
    <section v-if="loading">Loading...</section>
    <section v-for="tweet in tweets" :key="tweet.id">
      <Tweet
      :isRetweet="isRetweet"
      :text="text"
      :authorName="author.name"
      :authorScreenName="author.screenName"
      :authorUrl="author.url">
      </Tweet>
    </section>
  </main>
</template>

<script>
  import Tweet from './Tweet';
  import TWEETS_QUERY from '../graphql/tweets.gql';

  export default {
    name: 'tweetList',
    data(){
      return {
        tweets: [],
        loading: 0,
      };
    },
    components: {
      Tweet,
    },
    apollo: { //  Fetch tweets with apollo
      tweets: {
        query: TWEETS_QUERY,
        loadingKey: 'loading',
        pollInterval: 500, // Short-polling
      }
    },
  };
</script>