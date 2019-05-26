# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day | Deliverable | Status
|---|---| ---|
|5/24| Project Description | Complete
|5/24| Wireframes / Priority Matrix / Functional Components | Complete
|5/25| Core Application Structure (HTML, CSS, etc.) | Incomplete
|5/26| Pseudocode / actual code | Incomplete
|5/28| Initial Clickable Model  | Incomplete
|5/29| MVP | Incomplete
|5/31| Present | Incomplete


## Project Description

**Himitsu** is a React application that uses Jikan API to get basic information on any anime title. The user can browse a list of anime by alphabetical order, genre, or by using a search bar. The user can also save a list of anime to remember the ones they are interested in watching.

<!-- - [Himitsu - React Application]() -->
- [Jikan API Documentation](https://jikan.moe/)

### Data from API
```
{
    "request_hash": "request:top:c23b2c768926635441069f5a4c0843a4893faf77",
    "request_cached": true,
    "request_cache_expiry": 27198,
    "top": [
        {
            "mal_id": 38408,
            "rank": 1,
            "title": "Boku no Hero Academia 4th Season",
            "url": "https://myanimelist.net/anime/38408/Boku_no_Hero_Academia_4th_Season",
            "image_url": "https://cdn.myanimelist.net/images/anime/1251/97634.jpg?s=5fdff55d183f2ca2fd5a1aac02c2a539",
            "type": "TV",
            "episodes": null,
            "start_date": "Oct 2019",
            "end_date": null,
            "members": 155174,
            "score": 0
        },
		... 49 more items
	]
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

| Wireframe | Description |
| --- | --- |
| [Himitsu Homepage](https://res.cloudinary.com/chizakura/image/upload/v1558718938/Project%202/Homepage_Wireframe_Layout.png) | Main page that shows search bar and links to Anime Listing Page and Plan to Watch Listing Page. |
| [Himitsu Anime Listing Page](https://res.cloudinary.com/chizakura/image/upload/v1558720991/Project%202/Himitsu_Anime_Listing_Wireframe_Layout.png) | Shows a nav bar with the application title, search bar, and links to top 50 anime page and plan to watch listing page. |
| [Himitsu Plan to Watch Listing Page](https://res.cloudinary.com/chizakura/image/upload/v1558721902/Project%202/Plan_to_Watch_Listing_Wireframe_Layout.png) | Shows a list of plan to watch anime that the user selects. |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.

- [Himitsu Priority Matrix](https://res.cloudinary.com/chizakura/image/upload/v1558712248/Project%202/Project_2_Priority_Matrix.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP 

- Find and use an external api
- Render data on page in a list
- Data looks good on page
- Add search bar to look for anime by title
- Add selected data to plan to watch page

#### PostMVP 

- Create a filter dropdown
- Select certain filters to get list of anime that matches

## React Architectural Design

Define the the React components and the architectural design of your app.

#### [Himitsu Architectural Design](https://res.cloudinary.com/chizakura/image/upload/v1558712248/Project%202/Project_2_React_Architectural_Design.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | --- |
| Home | This will be the homepage and includes the search bar |
| AnimeListing | This will render a list of anime |
| SearchBar | This will render the search bar |
| NavBar | This will render the nav bar that includes the search bar |
| PlanToWatchListing | This will render the plan to watch page |
| AnimeDetails | This will render the details for an anime |
| PlanToWatch | This will add selected anime to the Plan to Watch Listing |


Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Build Home Page | H | 2hrs | 2hrs |
| Add Search Bar | H | 2hrs | 1hr |
| Add Nav Bar | H | 2hrs | 1.5hrs |
| Add Anime Listing Page | H | 2hrs | 1hr |
| Add Plan to Watch Listing Page | H | 2hrs | - |
| Use API to Load Anime List | H | 5hrs | - |
| Display Anime Details | H | 6hrs | - |
| Use Search Bar to Get List of Anime | H | 4hrs| - |
| Add Selected Anime to Plan to Watch Listing Page | H | 6hrs | - |
| Add Filter Dropdown Option | L | 5hrs | - |
| Use Filter to Search Anime | L | 5hrs | - |
| Total |  | 42hrs | - |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project.
 
| Library | What it Does |
| --- | :---: |
| Google Fonts | Used to set font for application and match theme |
| Jikan API | Used to get anime data |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.

#### SAMPLE.....
| Original Plan | Outcome |
| --- | :---: |
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated |

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier

**RESOLUTION**: Missing comma after first object in sources {} object