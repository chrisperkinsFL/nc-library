# nc-library

In the shared SCSS file, there is a class called '.max-width' set to (margin: 0 auto; max-width).  Add this class to any layout section to set a max width.  The deafualt will be 100% width.

# Navigation

- The default width is 100% of the browser. 
- If you add the class of 'max-width' to the 'header', the entire header width will be whatever the max-width class is set to.
- If you add the class of 'max-width' to 'class=flex-row' the max-width of the header content will be whatever the max-width class is set to. But, the background color on header will still stretch the entire width of the browser window.

- the height of the nav is controlled by .flex-row (The default is 60px).  The margin-top of the #profile on desktop only must be the same as the .flex-row height of the nav because it is absolute positioned.  If the margin is not the same, the #profile will be misaligned.