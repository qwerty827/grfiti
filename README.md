# Grfiti

Have you always wanted to leave your mark on somewhere you've been? Now, Grifiti gives you the ability to leave a mark, without any consequences.

## What does this do?
 With Grfiti, you can make an anonymous post, wherever you are at the moment. In your post, you can include pictures of the area and can leave a message to be seen by other travelers. 

As you change locations, your newsfeed automatically refreshes, so that you can stay up to date with the posts around you. If you see a post that you think is spam or abusive, you can report it, and it will be deleted afterwards. Grfiti also has the Twitter REST API implemented in, which allow users to have their tweets posted to a location's newsfeed.

## What was this built with?

The backend API is written in Node.js, using CockroachDB as a database and Express as the server framework. The API is hosted on an AWS EC2 instance. Our mobile app is written using React Native using Javascript which allows us to target both Android and iOS at the same time.

## Potential future implementations:
In the future, we were thinking of adding in a map within our UI. With the map UI, users would be able to see where exactly where they are on the app, and would have the ability to click on points on the map to see their newsfeeds. We were also thinking of adding an AR aspect to the map, with an avatar representing the user, could be seen walking in the map the map. 

Another thing that we were thinking of adding in the future is a function that would allow users to save posts, and have a place where users would view posts that they've saved, regardless of what newsfeed it came from. We were also thinking of integrating Instagram into the app, as well, so that users could have the ability to share Instagram posts on Grfiti as well.
