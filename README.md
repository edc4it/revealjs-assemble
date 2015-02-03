# reveal.js & assemble.io

Bootstrap project to use [reveal.js][] together with [assemble.io][]
 
This project allows for you to create reveal.js decks quickly by using a handbars template. 

## Setup

At the time of this writing there are some issues integrating gulp with assemble.io. Gulp is still the main entry-point
for this project. The 'gulpfile' uses the `Gruntfile.js` for the assemble task. 

Make sure you have [node/npm][node], [gulp][] and [grunt][] installed

```bash
npm i
bower install
```

### Generate the test deck

```bash
gulp assemble
```

### Serve

I am using node [http-server[httpserver]

'''bash
http-server .
'''

## Author decks

Add a new file to the `decks` dir:

```html.handlebars
---
title: ...
description: ...
author: ....
---

<section>
    ...
</section>

<section>
    ...
</section>
```

## Customise 

 1. **Custom style**: You can place your custom styles in `style/mystyle.scss` (it is included the in the template)
 2. **footer**: in case you need a footer, change the 'footer-text` in the `Gruntfile.js`
 3. **template**: the `layouts/deck.hbs` is the layout used. You can customise to your needs. As an example it now includes 
 a footer and a place holder to add opening/closing slides to each of your decks.

 
[reveal.js]:lab.hakim.se/reveal-js 
[assemble.io]:http://assemble.io/
[node]:http://nodejs.org/
[gulp]:http://gulpjs.com/
[grunt]:http://gruntjs.com/
[httserver]:https://www.npmjs.com/package/http-server