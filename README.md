## SUI
*a startpage for your server and / or new tab page*

![enter image description here](https://i.imgur.com/ADcyS1m.png)

### Deploy with Docker compose

#### Prerequisites:
 - Docker: [Linux](https://docs.docker.com/install/linux/docker-ce/debian/), [Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac), [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
 - [Docker-compose](https://docs.docker.com/compose/install/) 

#### Install:

 - `git clone` this repository
 - Build and bring up with `docker-compose up -d`
 - The page should be available at  `http://localhost:4000` 

To run at a different port open edit docker-compose.yml:

    ports:
          - 4000:80

### Customization

#### Changing color themes
 - Click the options button on the left bottom

#### Apps
Add your apps by editing apps.json:

    {
	    "apps" : [
		    {"name":"Name of app 1","url":"sub1.example.com","icon":"icon-name"},
		    {"name":"Name of app 2","url":"sub2.example.com","icon":"icon-name"}
	    ]
    }

Please note:

 - No `http://` in the URL
 - No `,` at the end of the last app's line
 - Find the names  of icons to use at [Material Design Icons](https://materialdesignicons.com/)

#### Bookmarks
Add your bookmarks by editing links.json:

```
{  
   "bookmarks":[  
      {  
         "category":"Category1",
         "links":[  
            {  
               "name":"Link1",
               "url":"http://example.com"
            },
            {  
               "name":"Link2",
               "url":"http://example.com"
            }
         ]
      },
      {  
         "category":"Category2",
         "links":[  
            {  
               "name":"Link1",
               "url":"http://example.com"
            },
            {  
               "name":"Link2",
               "url":"http://example.com"
            }
         ]
      }
   ]
}
```
Add names for the categories you wish to define and add the bookmarks for each category.

Please note:

 - No `http://` in the URL
 - No `,` at the end of the last bookmark in a category and at the end of the last category


#### Color themes
These can be added or customized in the themer.js file. When changing the name of a theme or adding one, make sure to edit this section in index.html accordingly:

```
    <section  class="themes">
```

I might add a simpler way to edit themes at some point, but adding the current ones should be pretty straight forward.