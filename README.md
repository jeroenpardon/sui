## SUI Extended

_A startpage for your server and / or new tab page_

![screenshot](https://i.imgur.com/J4d7Q3D.png)

[More screenshots](https://imgur.com/a/FDVRIyw)

[Extended Options](https://imgur.com/a/69CwxxW)

### Deploy with Docker compose

#### Prerequisites:

- Docker: [Linux](https://docs.docker.com/install/linux/docker-ce/debian/), [Mac](https://hub.docker.com/editions/community/docker-ce-desktop-mac), [Windows](https://hub.docker.com/editions/community/docker-ce-desktop-windows)
- [Docker-compose](https://docs.docker.com/compose/install/)

#### Install:

- `git clone` this repository
- Build and bring up with `docker compose up -d`
- The page should be available at `http://localhost:4000`

To run at a different port edit the docker-compose.yml
```yaml
  ports:
   - 4000:80
```

#### Install pull from git variant:

- refresh the source code every 5 minutes from master branch you provided - convenience feature for lazy devs
- `git clone` this repository
- build image `docker build -f DockerfilePullFromGit -t sui:latest .`
- run image with `docker run -e GITURL='https://x:ghp_x@github.com/jeroenpardon/sui.git' -p 8081:80 sui:latest`
- can be run also with a private repository by setting username:api-key@ in the url (see above example). Otherwise remove this part of the url.

### Customization

#### Config options

Change the config.json to your likings.

| Option                | Default          | Description                                     |
| --------------------- | ---------------- | ----------------------------------------------- |
| `language`            | `en-GB`          | The language code for localization.             |
| `greetings.morning`   | `Good Morning`   | Greeting text for the morning.                  |
| `greetings.afternoon` | `Good Afternoon` | Greeting text for the afternoon.                |
| `greetings.evening`   | `Good Evening`   | Greeting text for the evening.                  |
| `greetings.night`     | `Good Night`     | Greeting text for the night.                    |
| `useOauth2`           | `false`          | Whether to use OAuth2 Proxy for authentication. |
| `useAppCategories`    | `false`          | Whether to categorize applications.             |
| `oauth2UserInfoURL`   | `""`             | URL to call for user info.                      |
| `userPermissionKey`   | `""`             | Key used for user permissions on userinfo call. |
| `withApps`            | `true`           | Whether to show applications.                   |
| `withLinks`           | `true`           | Whether to show links.                          |
| `withSearch`          | `true`           | Whether to enable search functionality.         |
| `hideSettings`        | `false`          | Whether to hide the settings option.            |
| `labels.bookmarks`    | `Bookmarks`      | Label text for bookmarks.                       |
| `labels.applications` | `Applications`   | Label text for applications.                    |
| `backgroundImage`     | `""`             | URL for the background image.                   |
| `defaultTheme`        | `blackboard`     | The default theme to use.                       |

#### Theme Configuration

Change any theme you want or at a new theme by adding a name and the 3 color values.

| Option             | Default   | Description                      |
| ------------------ | --------- | -------------------------------- |
| `color-background` | `#1a1a1a` | Background color of the theme.   |
| `color-text-pri`   | `#FFFDEA` | Primary text color of the theme. |
| `color-text-acc`   | `#5c5c5c` | Accent text color of the theme.  |

#### Changing color themes

To change your theme click the options button on the bottom left and select your new theme. The selected theme will be stored in the local storage and loaded from there.

#### Apps

Add your apps by editing the `apps.json`:

```json
{
  "apps": [
    { "name": "Name of app 1", "url": "sub1.example.com", "icon": "icon-name" },
    {
      "name": "Name of app 2",
      "url": "sub2.example.com",
      "icon": "icon-name",
      "target": "optionals",
      "groups": ["foo", "bar"], // works only if useOauth2Proxy is set to true
      "category": "Test Category" // only used if useAppCategories is set to true
    }
  ]
}
```

Please note:

- No `http://` in the URL
- No `,` at the end of the last app's line
- Find the names of the icons to use at [Material Design Icons](https://materialdesignicons.com/)

#### Bookmarks

Add your bookmarks by editing the `links.json`:

```json
{
  "bookmarks": [
    {
      "category": "Category1",
      "links": [
        {
          "name": "Link1",
          "url": "http://example.com"
        },
        {
          "name": "Link2",
          "url": "http://example.com",
          "target": "optionals"
        }
      ]
    },
    {
      "category": "Category2",
      "links": [
        {
          "name": "Link1",
          "url": "http://example.com"
        },
        {
          "name": "Link2",
          "url": "http://example.com"
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
