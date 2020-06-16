# nc-library

In the shared SCSS file, there is a class called '.max-width' set to (margin: 0 auto; max-width).  Add this class to any layout section to set a max width.  The deafualt will be 100% width.



# File Structure

- 0-plugins - any type of css plugins that we need to rely on go here (i.e. animate.css, reset, hover.css, ect...)
- 1-base - This is where all universal styles should go (colors, mediaqueries, typography ect.) anything that will be used in many different places.  
    Note: there are probably things that I have coded thus far that will end up in the base folder later on, but for now I only want to include things that we for sure are going to need. 
- 2-layout - This contains all the scss files for each type of section.  (note: when creating a new scss file, be sure to import it using the _layout_dir.scss file)
- 3-components - I have not used yet and not sure that we will.  But if we do, I see this being specific custom design blocks that we will reuse.  

JS folder should be where all the JavaScript lives (feel free to add sub directories if needed).

All of the HTML will be under the 'markup' folder and should follow the current structure. 

When creating a new HTML section,  we want the parent to have a unique classname so the local styles won't be overridden.  (example. _hero_01.html starts with  '<section class="hero-1">' and it's corresponding SCSS file wraps all of it's styles in section.hero-1{ }

The numbers in the file name follow from top to bottom the designs that Haitham sent over.

My suggestion would be to try to tackle the hero section JavaScript for now.  My JavaScript ability is not very good, so if you want to rewrite the nav.js the proper way, that would be great.    

I am almost done with all the designs in the 'content' folders. I will then be moving on to the 'Futures' folder. 




# Navigation

- The default width is 100% of the browser. 
- If you add the class of 'max-width' to the 'header', the entire header width will be whatever the max-width class is set to.
- If you add the class of 'max-width' to 'class=flex-row' the max-width of the header content will be whatever the max-width class is set to. But, the background color on header will still stretch the entire width of the browser window.

- the height of the nav is controlled by .flex-row (The default is 60px).  The margin-top of the #profile on desktop only must be the same as the .flex-row height of the nav because it is absolute positioned.  If the margin is not the same, the #profile will be misaligned.
