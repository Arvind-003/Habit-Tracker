# Habit Tracker
   > A Web Application where you can track your daily habit status , not only for current day but whole week .

---

# Functionality

` Homepage `

   > User can add their regular habits , Displays all habits of user, user can delete particular habit , and can navigate to particular habit history for last 1 week in the profile page.

    ![Homepage](/images/home.png)

---

` Weekkly View Page `

   > Displays the track of last 1 week , user can update the status (1.e Done,Not Done , None) for particular if user has completed the his task that day.

   ![Profile](/images/profile.png)

---

# Folder Structure

* assets
    * css
        * home.css
        * layout.css
        * user_profile.css
    * scss
        * layout.scss
* config
    * middleware.js
    * mongoose.js
* controllers
    * home_controller.js
    * users_controller.js
* images
    * home.png
    * profile.png
* models
    * user.js
* routes
    * index.js
    * users.js
* views
    * _header.ejs
    * home.ejs
    * layout.ejs
    * user_profile.ejs
* .gitignore
* index.js
* package.json
* package-lock,json

---

# How to use

1. clone the repository
2. open downloaded folder in vs code

3. Run following command
  * npm install

4. connect to MongoDb
5. run command `node index.js`
6. go to localhost:8000





