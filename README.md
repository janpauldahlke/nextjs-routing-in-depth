# nextjs-routing-in-depth


### making routes load in parallel

* Parallel routes allow multiple independent components to be rendered inside a shared layout.
* Folders prefixed with @ (e.g., @archive, @latest) define parallel routes.
* They must be wrapped inside a layout.js, which receives them as props.

```md
/app/archive/
 ├── layout.js   # Wraps parallel routes
 ├── page.js     # Optional main archive page
 ├── @archive/
 │   ├── page.js # Renders inside { archive }
 ├── @latest/
     ├── page.js # Renders inside { latest }
```