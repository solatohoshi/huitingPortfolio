/*This function is used to hide the extra text in the cards and 
show it when the user clicks the "read more" button. The text in the button changes accordingly.
*/
const readMorebuttons = document.querySelectorAll(".readMoreBtn");

readMorebuttons.forEach((button) => {
  button.addEventListener("click", (e) => {
  const desc = e.currentTarget.previousSibling.previousSibling;
  const dots = desc.querySelector(".dots");
  const moreText = dots.nextSibling;
  const buttonText = e.currentTarget;

    if (dots.style.display === "none") {
      dots.style.display = "inline";
      button.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      button.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  });
});

/*This is the search function for users to locate the course they are
looking for. By typing the contents in the search bar, the page will shows the content that matches the string in the search bar. The user can also clicks the search button to see the result.
*/
const searchForm = document.querySelector("form");
const searchBtn = document.querySelector(".search");
const courses=document.querySelectorAll(".col");

const searchCourse = function(e){
  e.preventDefault(); // prevent default behavior

  window.location.href="#coursesInfo";

  const input=document.getElementById("myInput");
  const search=input.value.toUpperCase();

    for(let i=0; i<courses.length; i++){
      const textValue = courses[i].innerHTML;
      courses[i].classList.add("none");
      if(textValue.toUpperCase().indexOf(search)>-1){
       // courses[i].innerHTML
        // courses[i].innerHTML="";
        courses[i].classList.remove("none");
      }

    }
}

searchForm.addEventListener("submit", searchCourse);
searchBtn.addEventListener("click", searchCourse);

  /* This is the filter function that helps the user to view the courses by level.
  */
const btnContainer = document.querySelector(".btn-container");
const filterBtns = btnContainer.querySelectorAll(".filter");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", (e)=> {
    const level = e.currentTarget.id;
    //change button styles
    const current = document.querySelector(".filter.active");
    current.classList.remove("active");
    e.currentTarget.className += " active";

    for (let i=0; i<courses.length; i++){
      courses[i].classList.add("none");
    //addClass(courses[i], "none");
    if (courses[i].classList.contains(level) || level=="all" || level=="sort") {
      courses[i].classList.remove("none");
    //removeClass(courses[i], "none");
  }
    }
  });
});

/* This is the sorting function that will sort the courses by
level from high to low or low to high
*/
// Add click event listeners to the sort buttons
document.getElementById('low-to-high').addEventListener('click', () => {
  // Convert NodeList to array
  const coursesArray = Array.from(courses);

  // Sort the array based on the level class name
  coursesArray.sort((a, b) => {
    const levelA = parseInt(a.className.match(/level(\d)/)[1]);
    const levelB = parseInt(b.className.match(/level(\d)/)[1]);
    return levelA - levelB;
  });

  // Append the sorted columns back to the parent element in order
  for (let i=0; i<courses.length; i++){
  courses[i].classList.remove("none");
  const parent = courses[0].parentNode;
  parent.innerHTML = '';
  coursesArray.forEach(col => parent.appendChild(col));}
});

document.getElementById('high-to-low').addEventListener('click', () => {
  // Convert NodeList to array
  const coursesArray = Array.from(courses);

  // Sort the array based on the level class name in descending order
  coursesArray.sort((a, b) => {
    const levelA = parseInt(a.className.match(/level(\d)/)[1]);
    const levelB = parseInt(b.className.match(/level(\d)/)[1]);
    return levelB - levelA;
  });

  // Append the sorted columns back to the parent element in order
  for (let i=0; i<courses.length; i++){
    courses[i].classList.remove("none");
    const parent = courses[0].parentNode;
    parent.innerHTML = '';
    coursesArray.forEach(col => parent.appendChild(col));}
});


// function levelFilter(l){
//   var col, i;
//   col = document.getElementsByClassName("col");
//   if(l=="all") l = "";
//   for (i=0; i<col.length; i++){
//     removeClass(col[i], "show");
//     if (col[i].className.indexOf(l)>-1) addClass(col[i], "show");
//   }
// }

// //reference from w3school
// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }



