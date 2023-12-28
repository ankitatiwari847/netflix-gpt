#Netflix GPT:

-Create React App
-Configure tailwind
-Header
-Routing of app
-Login form
-Sign up form
-Form validation
-UseRef hook
-Authentication : firebase
-Deploy project on firebase
-Create signup user account
-Create redux store with user slice
-Save user data to redux store.
-Use onAuthStateChanged for dispatch on user signup / signin / signout or any other authentication state change (instead of dispatching actions on all the components on signin,signup,signout).
-writing onAuthStateChanged on body/app, and we want to call it only once so useeffect
-Implemnet signout
-Bug fix: Redirect user to browser if user is logedin (/ => /browse) and vice versa
-Unsubscribe to the onAuthStateChanged callback
-Fetch movie data from TMDB api (login -> edit profile -> API -> get ur api key & access token)
-Fetch now playing movie data
-Push the data in appStore in moviesSlice
-Use TMDB movie video for trailers, and make an api call using the movieId
-in store update movieTrailer using addMovieTrailer action

- In youtube on save option copy iframe code make it autoplay and mute.
- Use your trailer id in iframe.
  -Get the trailer id from store in videoBackground

  -Create a GPTSearch button
  -create gptSearch component, use it in Browse component-> show on if the in store showGPTSeearch is true.
  -Create a slice for GPTSlice -> toggleGptSearchView toggle action
  -on gpt search bitton dispatch action toggleGptSearchView
  -call GPTSearchBar and GPTSearchSuggestion in GPTSearch
  -in for multilangiuage support create languageConstant.js file
  in header create language dropdown select box
  -store language data in redux store in a config slice. create an action and dispatch it on select language. and update the lang in config slice.
  -Show lang select on showGptSearch is true
  -if already on gptSearcxh page the gpt button will show "home" instead of "gpt search"

#Features:
-Login/Sign Up
-Sign In/ Sign Up Form
-redirect to browser page
-Signout
-Fetch from tmdb api
-movie slice
-Browse page
