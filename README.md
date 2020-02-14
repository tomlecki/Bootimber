
# Bootimber

**Bootimber** is a Wordpress Theme with [Twig](https://twig.symfony.com/) templating language provided by [Timber](https://github.com/timber). It's a modified [fork](https://github.com/timber/starter-theme) of Timber Starter-theme with added Bootstrap 4 and Gulp automation (BrowserSync, Sass, Autoprefixer, Cssnano)

## Dependencies

* timber & twig (Composer)
* autoprefixer 9.6.0
* bootstrap 4.3.1
* browser-sync 2.26.7
* cssnano 4.1.10
* gulp 4.0.2
* gulp-postcss 8.0.0
* gulp-sass 4.0.2"

## Installation

1. Install Wordpress and go to wp-content/themes/
2. `git clone https://github.com/tomlecki/bootimber.git` or [download](https://github.com/tomlecki/bootimber/archive/master.zip) and extract this repository
3. `cd bootimber`
3. `composer install` - Timber installation (`/vendor` folder will be created)
4. `npm install` - Gulp, Bootstrap, BrowserSync, Sass, Autoprefixer, Cssnano installation (`/node-modules` folder will be created)
5. Activate theme in WP Admin panel

## How to start developing?

1. Go to `templates/base/html-header.twig` and decide about using CDN Css or Sass, if Sass first run `gulp style` to create initial `/css` and `app.css`.
2. Use `gulp.watch` to watch for .scss and .twig changes + start BrowserSync.
3. Start from looking at `base.twig` to create/modify skeleton of your project.
4. Remember that .php files are controllers that decide which .twig file to render --> the code line starts with `Timber::render`.
5. You can find some examples of available variables inside `pages/page.twig`, `index.twig` and filter examples in `posts/single.twig`
6. Visit Resources at the bottom of this page.

## Gulp configuration in gulpfile.js

* Change `proxy:` (line 26) to your local dev url like `http://localhost/your-website` or `your-website.dev`
* Uncomment `cssnano()` for production (optional)
* first use `gulp style` to generate initial CSS, and then `gulp.watch` to watch for .scss and .twig changes + start BrowserSync

## File structure in /templates

- `/base` - files included in base.twig
  - `html-header.twig` - standard head section 
  - `nav.twig` - Bootstrap navigation example 
  - `footer.twig` - footer section
  - `scripts.twig` - CDN JS scripts 
- `/parts` - all includes outside base.twig
  - `pagination.twig` - ready Bootstrap pagination
  - `macros.twig` - macro example
  - `include-example.twig` - include example with variable
- `/pages` - main page.twig + every new page template like page-custom.twig
  - `page.twig` - page template that renders if no page-custom.twig is found, code responsible for rendering particular .twig file can be found in `page.php`
- `/posts` - main single.twig + every new post template like single-custom.twig
  - `single.twig` - post template that renders if no single-custom.twig is found, code responsible for rendering particular .twig file can be found in `single.php`
- `base.twig` - main template file that puts together all blocks and includes
- `index.twig` - basic template if nothing else is found
- `search.twig` - template for search results
- `archive.twig`
- `404.twig` 

## Resources

* [Timber Docs](https://timber.github.io/docs/)
* [Twig Docs](https://twig.symfony.com/doc/2.x/)
* [Bootstrap](https://getbootstrap.com/)
* [WP Template Hierarchy](https://developer.wordpress.org/themes/basics/template-hierarchy/)

