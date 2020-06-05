function openNav() {
  document.getElementById("menu").style.display = "block";

  //if profile menu is open, this will close it so the nav shows
  let profile = document.getElementById("profile");
      profile.classList.remove("open-profile");

  //remove the hambuger menu icon
  let openIcon = document.getElementById("nav-icon-open");
      openIcon.classList.remove("open")
      openIcon.classList.add("close");

  //add the 'x' icon
  let closeIcon = document.getElementById("nav-icon-close");
      closeIcon.classList.remove("close");
      closeIcon.classList.add("open");
}

function closeNav() {
  document.getElementById("menu").style.display = "none";
  
  //add the hamburger menu icon
  let openIcon = document.getElementById("nav-icon-open");
      openIcon.classList.remove("close")
      openIcon.classList.add("open");

  //remove the 'x' icon
  let closeIcon = document.getElementById("nav-icon-close");
      closeIcon.classList.remove("open")
      closeIcon.classList.add("close");
}

function openProfile() {
    //closes the nav menu if the profile menu is clicked
    document.getElementById("menu").style.display = "none";

    //toggles between open and close of the profile menu
    let profile = document.getElementById("profile");
        profile.classList.toggle("open-profile");

    //displays the standard hamburger icon if profile is open
    let navMenu = document.getElementById("nav-icon-open");
        navMenu.classList.add("open");

    //removes the 'x' in the navigation if the nav menu is open when the profile menu is clicked
    let navMenuClosed = document.getElementById("nav-icon-close");
        navMenuClosed.classList.remove("open")
        navMenuClosed.classList.add("close");
}