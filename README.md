# LU-KA DOT ME

Hello, and welcome to my personal portfolio website!

## Development

All unminified files are in the `unminified/` directory. All the pages are served as-is from `public/`. 

For local development, run `yarn install` to download any existing dependencies, then run `gulp build` to build the source CSS/JS into minified versions that will be placed in the appropriate locations inside of the `public` directory. After the `build` task, run `gulp default` or just `gulp` to have Gulp monitor the unminified directory for any changes and automatically compile/minify the files.
