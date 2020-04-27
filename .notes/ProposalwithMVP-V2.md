# Project 2 Proposal: 'Shoppr'

### Overview

Shoppr is an advanced note-taking and personal ratings app which allows professional shoppers to easily find the best 'thrift type' stores to buy certain types of items at. The alpha version of Shoppr will be built around the specific needs of properties shoppers in the theatre industry. Because internet based stores and big-box retailers are already searchable via the web, the focus of this app is on keeping track of what kind of inventory thrift stores (and other similar types of stores) tend to have on hand. 

To this end, the app focuses on only 4 categories of item: Fashion, Furniture, Home Goods, and Miscellaneous. While many other item categories exist, they mostly consist of things that are sold at the aforementioned big box stores, or on the internet and therefor are not applicable to the supported use-cases of this application. 

The two key functionalities of the application are to allow user creation of 'Yelp-like' store pages and to allow users to subsequently search in geographically confined areas for these stores using categories and/or search tags. 

### Key Functionality (MVP Features)

* Store Pages Contain:
  * Store Name
  * Store Address with hotlink to Google Maps (Nice to have: On page map window)
  * Up to 4 categories each represented as its own 'tab' within page, each having its own unique subset of info
    * 3 Ratings: Quality, Quantity, Price on a scale of 1 to 3. 
    * Tags: Containing an arbitrary amount of search tags which users may add to. 
    * Personal Section:
      * The users own personal ratings for the category 
      * The users own text box with their own notes for that store category, viewable and editable only by them
  * Misc category containing tags and user notes, but no ratings 
* Search Page Containing
  * Required field: Category (Dropdown list)
  * Optional field: Tag
  * Required Field: Location (Dropdown with options, eg: within 10 mi, within 50 mi)
  * Optional 3x set of radio buttons: Minimum rating for category 
* User authentication allowing for:
  * Users can create new accounts with an email, username, and password
  * Users can login and log out
  * Users are able to add stores and add info to stores
  * Users can edit their ratings and notes on stores after creating them
* Home page which provides a brief overview of website purpose and functionality for new users as well as links to the other pages.

### Additional Possible Functionality (Nice to Haves)

* Each store page contains an interactive map box showing the location of the store with a 'get directions' button below
* Users can add a vote to have a tag removes from a store page
* Tags are automatically removed or queued for moderator attention if they get a enough negative votes 
* Moderator privileges for some users allowing them to remove tags or categories from store pages
* Detect when a user attempts to create a duplicate store page and prevent it
* Allow merging of duplicate store pages 
* Allow stores to be marked as closed or out of business 
* Add store hours and other info from google maps
* Route planner that finds the most efficient route to hit multiple stores in the shortest amount of time (priority to highest rated stores first)
* A way for users to bring up a list of all stores for which they have personally added information
* Allow moderators to add notes to store pages that all users can see, such as warnings or helpful tips
* And 'about' page with links to my linkedin and github pages, etc.
* User blacklist feature, allowing users to permanently filter a particular store out of appearing any time they make a search.
* Allow users to re-set their passwords via email
* Add third party authentication such as google and facebook

### User Stories

* As a user I can create an account for myself
* As a user I can add a store listing to the website/app
* As a user I can rate a store listing in a specific category 
* As a user I can add personal notes to a category in a store
* As a user I can search for stores which have particular categories and tags