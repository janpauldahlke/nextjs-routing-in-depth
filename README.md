# nextjs-routing-in-depth


## preview possible here

[codesandbox](https://codesandbox.io/p/github/janpauldahlke/nextjs-routing-in-depth/main?import=true&workspaceId=ws_13ESXanWQPaPX2oCQ9ipWD)

---

>**this took me hours to understand**

## 🚨 LEARNING VERY IMPORTANT 🚨

### ⚠️ Next.js Parallel Routes & Caching Issue
When using **parallel routes (@slot) and intercepted routes (.)**, Next.js **caches routing structures aggressively**, which can lead to:
- **Routes not resolving properly**
- **Intercepted routes (`(.)folder`) failing to load**
- **`modal` slots appearing as `undefined`**
- **Page updates not reflecting in development mode**

#### 🛠 Fix: Clear Next.js Cache
If changes to parallel or intercepted routes **aren’t working**, **always** try this:
```sh
rm -rf .next
npm run dev
```


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

#### optional catch-all segements
[docs](https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#optional-catch-all-segments)

Catch-all routes handle dynamic segments in a flexible way:

* [...slug] → Required catch-all, matches /archive/2024 or /archive/2024/01, but not /archive.
* [[...slug]] → Optional catch-all, matches /archive, /archive/2024, or /archive/2024/01.

Use params.slug?.[index] to access segments safely.

```jsx
const Page = ({ params }) => {
  const year = params.slug?.[0] || "All";
  const month = params.slug?.[1] || "All";

  return <p>Year: {year}, Month: {month}</p>;
};
export default Page;
```
This allows `/archive/2024/01`, `/archive/2024`, and `/archive`.


#### intercepting routes 

[nextjs interceptiong routes docs](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes)

```
(.) to match segments on the same level
(..) to match segments one level above
(..)(..) to match segments two levels above
(...) to match segments from the root app directory
```

> in our words and understanding
* this enables us to differ from internal routes to external link calls, so ecternal calls get handlede differently like in our  example and will reroute away from the fullscreen image
* see `/news/[newsSlug]()image` for naming convention 
  * `(.)<sibling route name>` when the sibling folders name is identical
  * `(..)<sibling route name>` when the sibling folders name is identical and nested route
  * `(<silbing folder name>)` is also fine
