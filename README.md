# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

| Day | Deliverable | Status
|---|---| ---|
|5/24| Project Description | Complete
|5/24| Wireframes / Priority Matrix / Functional Components | Complete
|5/28| Core Application Structure (HTML, CSS, etc.) | Complete
|5/28| Pseudocode / actual code | Complete
|5/29| Initial Clickable Model  | Complete
|5/29| MVP | Complete
|5/31| Present | Complete


## Project Description

**Himitsu** is a React application that uses Kitsu API to get basic information on any anime. The user can browse a list of anime by using a search bar. The user can also add anime to a watch list to keep track of anime they plan to watch and check a list of trending anime.

- [Himitsu - React Application](https://himitsu-react.herokuapp.com/)
- [Kitsu Website](https://kitsu.io/anime)
- [Kitsu API Documentation](https://kitsu.docs.apiary.io/#reference)

### Data from API
```
{
    "data": [
        {
            "id": "1",
            "type": "anime",
            "links": {
                "self": "https://kitsu.io/api/edge/anime/1"
            },
            "attributes": {
                "createdAt": "2013-02-20T16:00:13.609Z",
                "updatedAt": "2019-05-28T18:00:06.682Z",
                "slug": "cowboy-bebop",
                "synopsis": "In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as \"Cowboys\". The ragtag team aboard the spaceship Bebop are two such individuals.\r\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member's dark and mysterious past little by little. \r\nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.  \r\n[Written by MAL Rewrite]",
                "coverImageTopOffset": 400,
                "titles": {
                    "en": "Cowboy Bebop",
                    "en_jp": "Cowboy Bebop",
                    "ja_jp": "カウボーイビバップ"
                },
			... more data
			}
        },
		... more data
	]
}
```

## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe.

| Wireframe | Description |
| --- | --- |
| [Himitsu Homepage](https://res.cloudinary.com/chizakura/image/upload/v1558718938/Project%202/Homepage_Wireframe_Layout.png) | Main page that shows search bar and links to trending anime page and plan to watch listing page. |
| [Himitsu Anime Listing Page](https://res.cloudinary.com/chizakura/image/upload/v1558720991/Project%202/Himitsu_Anime_Listing_Wireframe_Layout.png) | Shows a nav bar with the application title, search bar, and links to trending anime page and plan to watch listing page. |
| [Himitsu Plan to Watch Listing Page](https://res.cloudinary.com/chizakura/image/upload/v1558721902/Project%202/Plan_to_Watch_Listing_Wireframe_Layout.png) | Shows a list of plan to watch anime that the user added. |

## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.

- [Himitsu Priority Matrix](https://res.cloudinary.com/chizakura/image/upload/v1558712248/Project%202/Project_2_Priority_Matrix.jpg)

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP. Carefully decide what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP 

- Find and use an external API
- Render data on page in a list
- Data looks good on page
- Add search bar to look for anime by title
- Add selected anime to plan to watch page
- Show a list of trending anime

#### PostMVP 

- Create a filter dropdown
- Select genres to filter a list of anime

## React Architectural Design

Define the the React components and the architectural design of your app.

#### [Himitsu Architectural Design](https://res.cloudinary.com/chizakura/image/upload/v1559297365/Project%202/React_Architectural_Design.jpg)

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components.

| Component | Description |
| --- | --- |
| Home | This will be the main page with a search bar |
| AnimeListing | This will render a list of anime based on input from the user |
| PlanToWatchListing | This will render a list of anime the user selects |
| SearchBar | This will render the search bar |
| NavBar | This will render the nav bar that includes a search bar |
| AnimeDetails | This will render the details for an anime |
| PlanToWatch | This will add selected anime to a plan to watch list |
| Trending | This will show a list of trending anime |


Time frames are also key in the development cycle. You have limited time to code all phases of the game. Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe.

| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Build Home Page | H | 2hrs | 2hrs |
| Add Search Bar | H | 2hrs | 1.5hrs |
| Add Nav Bar | H | 2hrs | 1.5hrs |
| Add Anime Listing Page | H | 2hrs | 2hrs |
| Call API to Get List of Anime | H | 5hrs | 6hrs |
| Use Search Bar to Get List of Anime | H | 4hrs| 4hrs |
| Display Anime Details | H | 2hrs | 2hrs |
| Add Plan to Watch Listing Page | H | 2hrs | 1hr |
| Add Selected Anime to Plan to Watch Listing Page | H | 2hrs | 1.5hr |
| Search Bar Goes to Linked Page | M | 4hrs | 2.5hrs |
| Make Website Look Nice | M | 8hrs | 7hrs |
| Fixed Bugs and Errors | M | 7hrs | 6.5hrs |
| Add Trending Anime Page | M | 2hrs | 1.5hrs |
| Total |  | 44hrs | 37.5hrs |

## Additional Libraries

 Use this section to list all supporting libraries and thier role in the project.
 
| Library | What it Does |
| --- | --- |
| Google Fonts | Used to set font for application and match theme |
| Material | Used box icons to set style when adding anime to watch list |
| Kitsu API | Used to get anime data |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

**withRouter**: By using withRouter, when a user gives an input in the search bar, it redirects the user to the listing page instead of staying on the current page.
```
async handleSearch(event) {
    event.preventDefault();
    this.props.history.push('/animelisting');
    ... some more code
}
```

## Change Log

 Use this section to document what changes were made and the reasoning behind those changes.

| Original Plan | Outcome |
| --- | --- |
| Use Jikan API | The search feature for Jikan had a CORS error so Kitsu API had to be used as the main API |

## Issues and Resolutions

 Use this section to list of all major issues encountered and their resolution.

### #1
**ERROR**: Some anime don't have a poster image.
```
TypeError: Cannot read property 'large' of null
```
**RESOLUTION**: Created a function to check if posterImage is null and used a placeholder for it.
```
checkPosterImage(poster) {
    if(poster === null) {
        return ("https://res.cloudinary.com/chizakura/image/upload/v1559072918/Project%202/no_image_available.jpg")
    } else {
            return (poster.large)
    }
}
```

### #2
**ERROR**: Some inputs show zero results.
```
Unhandled Rejection (TypeError): Cannot read property 'protocol' of undefined
```
**RESOLUTION**: Set up an if/else conditional to check if input gives a certain number of counts.
```
if(first.data.meta.count === 0) {
    this.setState({
        message: "No result",
        searchValue: ""
    })
}
```