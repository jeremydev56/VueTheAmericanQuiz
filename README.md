# Tailwind CSS as a PostCSS Plugin

A starter template for very simple projects (no frameworks) with Tailwind CSS setup as a PostCSS plugin. You only need to install NPM.

Follow the Getting Started guide and build websites with Tailwind CSS. Also, follow the steps to Optimize for Production to end up with a very tiny final CSS bundle.

**OR**


## Getting Started

Install dependencies

        npm install

Build using Tailwind CSS

        npm run build

Open the `public > index.html` file in your browser and you should see a heading styled with a gradient. If you don't see a gradient on the text, something went wrong.

## How to use

-   Go to `public > index.html` Remove the `<h1>` element and start adding your own HTML.
-   If you need to add more HTML pages, add them in the `public` folder.
-   To extract classes and use the `@apply` directive, edit the custom CSS file in `src > styles.css`. Add any amount of custom CSS within this file. Refer [https://tailwindcss.com/docs/installation#using-a-custom-css-file](https://tailwindcss.com/docs/installation#using-a-custom-css-file)

Watch HTML files for changes and build automatically everytime using

    npm run watch

NOTE: Do NOT edit the file `public > dist > styles.css` directly - This is the distribution stylesheet. The CSS here is generated from `src > styles.css` using Tailwind when you build.

## Optimize for production

Before pushing your code (the `public` folder) for production, run the below command to reduce the size of `styles.css` within the public folder

     npm run prod

NOTE: If you are using Windows and face an error `NODE ENV not recognised`, run the below command

     npm install win-node-env
