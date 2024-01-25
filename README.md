## Next - API Routes

<img src="https://media.istockphoto.com/id/1402763474/photo/glass-lowercase-letter-n.webp?b=1&s=170667a&w=0&k=20&c=o6M7-ISejHoEpcnqeum5HZBPTomGg6DXakmtdpU7CwY=" alt="Next" width="350" />

### Setup

`npx create-next-app@latest`

***

_.env.local_

```JavaScript
    URL=http://locahost:3000
```

_middleware.ts_

`config` re-routes users to homepage when trying to go to /profile or /about

```JavaScript
    export const config = {
        matcher: ['/profile', '/about']
    }
```