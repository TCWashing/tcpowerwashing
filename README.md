<div align="center">
  <img src="https://cdn.discordapp.com/attachments/784637379830218752/838280225468842014/Template.png" alt="Banner Image">
Stack: Next.js / React, Tailwind CSS, Prettier 
</div>

## Getting Started

### First install the packages:

```bash
yarn
```

### Start the server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.jsx`. The page auto-updates as you edit the file.

### Add your company assets

Set all of these by search and replacing in the scope of the root/whole project:

```
TC Detail
Collection composed by 2222 Fragments of the Loop
Checkout our website to view our project!
CompanyImage (remote url, include https://, you can use something like https://og-image.wzulfikar.com/)
CompanyColor (hex code without the #)
CompanyUrl (with https:// with no / at the end)
Add your google analytics ID as GA_ENV in an env file
```

### Checking company assets

Go through these files and double check that everything fits your brand.

```
/public/site.webmanifest
next-seo.config.js
/public/robots.txt
/public/sitemap.xml
/config/seo.json
/styles/globals.css
```

### Tailwind CSS setup

Open the `tailwind.config.js` file.
Input your colors and shades of that color (use something like https://noeldelgado.github.io/shadowlord/).

The default font is **Public Sans** but you can set your own by changing line 1 of the `/styles/globals.css` file.

### Image setup

Store your images in the `/public` folder, this template includes a bunch of broken image names that you should replace with your own.

- T=transparent
- C=circle

### Code

Get to work! Feel free to send me what you make with this, I would love to see it!

Contact: `ian@jedi.net`

### Deploy on Vercel

The easiest way to deploy is to use the [Vercel Platform](https://vercel.com/) from the creators of Next.js.
