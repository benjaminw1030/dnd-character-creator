### Name of Student:
Benjamin Wilson

### Name of Project:
D&D 5e Character Creator

### Project's Purpose or Goal: (What will it do for users?)
This project will allow the user to create a character for 5th edition Dungeons and Dragons, edit their stats, save characters to a list, and calculate skills and abilities based off of their numbers.

### List the absolute minimum features the project requires to meet this purpose or goal:
- The user has full CRUD on their characters.
- The user can save and reload characters for a later date.
- Statistics will be automatically calculated based on the character.

### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
- React.js
- JavaScript
- CSS
- C# (for back end)
- MySQL
- D&D 5e API: http://www.dnd5eapi.co/

### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.
- An inventory page with weight calculations.
- A character spellbook that tracks memorized spells and refreshes on long rests.
- A long rest/short rest function to replenish HP and Spells
- Level up button that automatically applies required changes to the next level.
- Implement a standalone save function that allows users to save data without needing special software or applying a database migration.

### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
Will need some specialized software that can save data, maybe https://github.com/microsoft/managedesent or XML.

### Is there anything else you'd like your instructor to know?
Looking forward to trying this out, this project will definitely present some unique challenges for me.

### Instructor Response:
```
Hey Ben! 

This sounds AMAZING! I love this idea quite a bit.  I used to use character creator tools that I found online when I used to play years and years ago, and this is definitely a considerable challenge with all of the bits and bobs that you can mess with. I think you've also got a strong user-base and use for this application, as well as some great stretch goals here. 

Here are a few things I want to point out: 

Pre-planning your back-end

A lot of this part is pretty predicated on the content of the 5e handbook itself. You may have a lot of research to do to make sure that your functionality, options, abilities, skills, etc are correctly attributed depending on the user's selections.

How exactly do you want users to access this information? Do you want a website with authentication for users to call up their saved characters from the backend? Do you want to be able to save it as a file? An image/character sheet? (stretch goal, as you have here)

Users and authentication

If you feel like you'll want to host this site somewhere, I'd look into using google or third-party authentication so you don't have to store sensitive user data on a database.

I'd also try to make sure that users can't maliciously attack your database with spam, or bloat it and cost you money.

Alternatively, you can avoid databases entirely and specifically look at local storage as the only way to keep this information. Or both!

React and styling

I see that you're planning on using react, and I think this is great! Modularity helps with these sorts of projects!

Consider using React style libraries, such as Semantic-UI or something similar (there are many!)

All in all, I think you have a great setup here for 40 hours of work. Your MVP is attainable and you have plenty of other research to do for any stretch goals you make it to! Well done! Excited to see what comes of it (and selfishly hope to use it when I join my friend's upcoming campaign...). 

-Erik
```
### Research & Planning Log
#### 12/3/2021
* 11:00 initial commits.
* 11:17 researching Semantic UI: https://react.semantic-ui.com/
* 12:09 creating diagram