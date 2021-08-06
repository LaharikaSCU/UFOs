# Module-11 UFO Sightings

## Overview of the analysis:

The purpose of the project is to help Dana, a data journalist build a website to publish her article on Mc Minniville, Oregon. Mc Minniville is famous for UFO sightings a topic Dana has been interested for a very long time. She will also use this website as a platform to publish the javascript file she has, which contains exciting information about the UFO sightings such as the countries, cities, type of sightings etc. The website is built using Bootstrap for front end and Javascript for filtering the data in the backend. Users can filter through the table to look at a particular sighting with filters on date, city, state, country, shape.

## Results:

In the website https://laharikascu.github.io/UFOs/ there are filters to skim through the table. User can filter using date of sighting, City, State, Country or shape. After entering the input, the results are displayed. Below is the walkthrough of the website along with images:

The upper half of the webpage is the static content where Dana can publish her article on Mc Minniville. The text is hard-coded and does not change automatically until someone manually erases and types in new content in the back-end in the index.html page.

![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-26%20at%204.12.28%20PM.png)

The second half of the page displays filters with input boxes - on the left and a table with all the UFO sightings information - on the right. 

![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-26%20at%204.13.08%20PM.png)


We can use the filters to skim through the particular sighting we are looking for, by providing the keyword in the appropriate input box. For example, in the below image We are filtering the table on date field to see the results for UFO sightings on '1/13/2010'. In the backend, the filter is applied on the table for date field and all the records matching the filter are displayed. 

![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-26%20at%204.14.11%20PM.png)

Same process is applied for all the filters. Below are the images illustrating the same:

Filter by city: 
![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-30%20at%203.54.34%20PM.png)

Filter by state: 
![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-26%20at%204.15.00%20PM.png)

Filter by country: 
![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-26%20at%204.15.43%20PM.png)

Filter by shape: 
![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-26%20at%204.16.43%20PM.png)



## Summary:

### Drawback:

1. The search keywords have to match exactly to the corresponding fields in the table else the filter wouldn't work. 

![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-26%20at%204.17.52%20PM.png)

2. Also, It would be nice and easy for the users if the input box is not case sensitive. 

The below images are the examples showing the results for different case-sensitive search of a keyword:

![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-30%20at%204.10.57%20PM.png)

![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-30%20at%204.11.08%20PM.png)

![alt text](https://github.com/LaharikaSCU/UFOs/blob/main/static/Images_Readme/Screen%20Shot%202021-07-30%20at%204.11.21%20PM.png)


### Additional recommendations:

For making the website more user friendly:

1. It is good to have the search boxes not case-sensitive.
2. Good to have more dynamic content like more images or real-time sightings information scrolling to make webpage more interesting.
3. It would also be helpful for the users if some of the search fields had 'drop-down' option (with pre-populated values for example, state, country, shape etc).



