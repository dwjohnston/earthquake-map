

## Instructions

You need a Google Maps API key for this. [Get one here.](https://cloud.google.com/maps-platform/)

You need to set that as the environment variable `REACT_APP_GOOGLE_MAP_KEY`. 


## Issue with Google Maps Lat/Lng and the API Lat/Lng. 

I made things way harder for myself  by attemping to save the the previous search results, but only display them if the they're within the google bound box. 

This becomes a problem when you're straddling the -180/+180 line. So I commented out that functionality. It does mean that you get a bit of a cludgy experience as you have to wait for the API to load. 


## The general approach I've taken. 

The codebase generally reflects how I'd structure a project. 

I might have put some Jest tests in too, on those reducers and selectors etc. But to be honest - I think, especially in a faster pace environment like a technical test like this, TypeScript is much more helpful in avoiding errors. 







