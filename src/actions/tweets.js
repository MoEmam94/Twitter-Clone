export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

export const recieveTweets = (tweets) => ({
    type: RECEIVE_TWEETS,
    tweets,
})