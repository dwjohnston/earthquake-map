

## Instructions

You need a Google Maps API key for this. [Get one here.](https://cloud.google.com/maps-platform/)

You need to set that as the environment variable `REACT_APP_GOOGLE_MAP_KEY`. 


## Technology choices 

 - Ordinarily I would add Material-UI but I haven't. 
 - Redux might be overkill for this kind of thing. You might also use something like react-loads. 
 - Typescript FTW. 
 - I opted for JSS for my CSS solution. 
 - Create-React-App is nice and simple. 


## Functionality 
- You can see my EarthQuakeServce that I'm fetching a narrow band of dates and limiting the results to 10 and magnitute above 3. This is pretty arbitary. I imagine IRL you would have a control panel that would allow the user to refine these details. 
- I'm not displaying the list of quakes, and I'm not fully displaying all the details. But you can see how that functionality would be added. 

## Issue with Google Maps Lat/Lng and the API Lat/Lng. 

I made things way harder for myself  by attemping to save the the previous search results, but only display them if the they're within the google bound box. 

This becomes a problem when you're straddling the -180/+180 line, because the selector I'd written didn't work. I imagine there's a library that will make that work. 

 I spent about and hour working that out. 

So I commented out that functionality. It does mean that you get a bit of a cludgy experience as you have to wait for the API to load. 

## The general approach I've taken. 

The codebase generally reflects how I'd structure a project. 

I might have put some Jest tests in too, on those reducers and selectors etc. But to be honest - I think, especially in a faster pace environment like a technical test like this, TypeScript is much more helpful in avoiding errors. 

## How you'd improve this. 

Beyond making it look pretty: 

- The main question is around the UX of as the user scrolls. I think caching the results locally is a good idea, as you can retain markers on the map even as it is loading. 


