## SUI
*a startpage for your server and / or new tab page based off the simle and excellent [jeroenpardon/sui](https://github.com/jeroenpardon/sui)*

![screenshot](https://i.imgur.com/J4d7Q3D.png)

[More screenshots](https://imgur.com/a/FDVRIyw)

### Changes from the original

- This is no longer installed as a Docker container; simply place these files in your web server folder
- 


#### Install:

 - `git clone` this repository


### Customization

#### Changing color themes
 - Once the startpage is loaded in your browser, click the options button on the left bottom

#### Apps
Add your apps by editing apps.json:

    {
	    "apps" : [
		    {"name":"Name of app 1","url":"http://sub1.example.com","icon":"icon-name"},
		    {"name":"Name of app 2","url":"https://sub2.example.com","icon":"icon-name"}
	    ]
    }

Please note:

 - The original code hardcoded an 'https://' in the HTML. That was removed from this version so you need to include http(s) in the apps.json
 - No `,` at the end of the last app's line
 - Find the names  of icons to use at [Material Design Icons](https://materialdesignicons.com/)

#### Bookmarks
Add your bookmarks by editing links.json:

```
{  
   "bookmarks":[  
	{
            "category": "Reading",
            "links": [
              {"name": "Reddit","url": "http://reddit.com"},
              {"name": "Instapaper","url": "https://www.instapaper.com/u"},
              {"name": "Medium","url": "http://medium.com"}
            ]
         }

   ]
}
```
Add names for the categories you wish to define and add the bookmarks for each category.

Please note:



#### Color themes
These can be added or customized in the themer.js file. When changing the name of a theme or adding one, make sure to edit this section in index.html accordingly:

```
    <section  class="themes">
```

