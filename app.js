/* Hero opening */

// let hero = document.querySelector(".hero");
// let slider = document.querySelector(".slider");
// let animation = document.querySelector("section.animation-wrapper");

// const time_line = new TimelineMax();
// // ( target, duration, start, end< )
// time_line
//   .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
//   .fromTo(
//     hero,
//     1.2,
//     { width: "80%" },
//     { width: "100%", ease: Power2.easeInOut }
//   )
//   .fromTo(
//     slider,
//     1,
//     { x: "-100%" },
//     { x: "0%", ease: Power2.easeInOut },
//     "-=1.2"
//   )
//   .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

// setTimeout(() => {
//   animation.style.pointerEvents = "none";
// }, 2500);

/* trash can
 - disable enter key on web */
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

/* prevent button in the form to subnit the form */

let allbtn = document.querySelectorAll("button");
allbtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let allselects = document.querySelectorAll("select");
allselects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    changecolor(e.target);
  });
});

/* change credit and update GPT*/

let credits = document.querySelectorAll(".class-credit");
credits.forEach((e) => {
  e.addEventListener("change", () => {
    setGPA();
  });
});

/* change select opt color */
function changecolor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B+" ||
    target.value == "B-"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C+" ||
    target.value == "C-"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D+" ||
    target.value == "D-"
  ) {
    target.style.backgroundColor = "blue";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "blakc";
    target.style.color = "white";
  }
}

/*
A => 4
B => 3
C => 2

total score / total credit
*/

function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll("select");
  let sum = 0;
  let creditSum = 0;
  //   console.log(credits);

  for (let i = 0; i < credits.length; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      creditSum += credits[i].valueAsNumber;
    }
  }

  for (let i = 0; i < formLength; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      sum += credits[i].valueAsNumber * convertor(selects[i].value);
    }
  }
  console.log(sum);
  console.log(creditSum);

  let result = sum / creditSum;
  if (creditSum == 0) {
    result = 0.0;
  } else {
    result = (sum / creditSum).toFixed(2);
  }
  document.getElementById("result-gpa").innerText = result;
}

function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

let addbtn = document.querySelector(".plus-btn");
addbtn.addEventListener("click", () => {
  let newform = document.createElement("form");
  let newdiv = document.createElement("div");
  newdiv.classList.add("grader");

  // add new 5 elements
  let newinput1 = document.createElement("input");
  newinput1.setAttribute("type", "text");
  newinput1.setAttribute("list", "opt");
  newinput1.classList.add("class-type");

  let newinput2 = document.createElement("input");
  newinput2.setAttribute("type", "text");
  newinput2.classList.add("class-number");

  let newinput3 = document.createElement("input");
  newinput3.setAttribute("type", "number");
  newinput3.setAttribute("max", "6");
  newinput3.setAttribute("min", "0");
  newinput3.classList.add("class-credit");
  newinput3.addEventListener("change", () => {
    setGPA();
  });

  // here is the select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);

  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);

  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);
  newSelect.addEventListener("change", (e) => {
    setGPA();
    changecolor(e.target);
  });

  let newtrash = document.createElement("button");
  newtrash.classList.add("trash-button");
  let newItag = document.createElement("i");
  newItag.classList.add("fas");
  newItag.classList.add("fa-trash");
  newtrash.appendChild(newItag);
  newtrash.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  newdiv.appendChild(newinput1);
  newdiv.appendChild(newinput2);
  newdiv.appendChild(newinput3);
  newdiv.appendChild(newSelect);
  newdiv.appendChild(newtrash);

  newform.appendChild(newdiv);
  document.querySelector(".allinput").appendChild(newform);
  newform.style.animation = "scaleUp 0.5s ease forwards";
});

let alltrash = document.querySelectorAll(".trash-button");
alltrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
    // e.target.parentElement.parentElement.remove();
  });
});

alltrash.forEach((trash) => {
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitioned", (e) => {
    e.target.remove();
    setGPA();
  });
});

// merge sort

let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");
btn1.addEventListener("click", () => {
  handleSorting("descending");
});
btn2.addEventListener("click", () => {
  handleSorting("ascending");
});
function handleSorting(direction) {
  let graders = document.querySelectorAll("div.grader");
  let objectarr = [];

  for (let i = 0; i < graders.length; i++) {
    let class_name = graders[i].children[0].value; //class category
    let class_number = graders[i].children[1].value; //class number
    let class_credit = graders[i].children[2].value;
    let class_grade = graders[i].children[3].value;
    // console.log(class_name, class_number, class_credit, class_grade);
    if (
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
      };

      objectarr.push(class_object);
      // console.log(objectarr);
    }
  }

  // Have the object array, and change grade string
  for (let i = 0; i < objectarr.length; i++) {
    objectarr[i].class_grade_number = convertor(objectarr[i].class_grade);
  }

  objectarr = mergesort(objectarr);
  if (direction == "descending") {
    objectarr = objectarr.reverse();
  }
  // console.log(objectarr);

  //update html

  // let allinput = document.querySelector(".allinput");
  // allinput.innerHTML = "";
  // for (let i = 0; i < objectarr.length; i++) {
  //   allinput.innerHTML = `<form>
  //       <div class="grader">
  //           <input
  //           type="text"
  //           placeholder="class category"
  //           class="class-type"
  //           list="opt"
  //           value=${objectarr[i].class_name}
  //           /><!--
  //           -->
  //           <input
  //           type="text"
  //           placeholder="class number"
  //           class="class-number"
  //           value=${objectarr[i].class_number}
  //           /><!--
  //           -->
  //           <input
  //           type="number"
  //           placeholder="credits"
  //           min="0"
  //           max="6"
  //           class="class-credit"
  //           value=${objectarr[i].class_credit}
  //           /><!--
  //           -->
  //           <select name="select" class="select">
  //           <option value=""></option>
  //           <option value="A">A</option>
  //           <option value="A-">A-</option>
  //           <option value="B+">B+</option>
  //           <option value="B">B</option>
  //           <option value="B-">B-</option>
  //           <option value="C+">C+</option>
  //           <option value="C">C</option>
  //           <option value="C-">C-</option>
  //           <option value="D+">D+</option>
  //           <option value="D">D</option>
  //           <option value="D-">D-</option>
  //           <option value="F">F</option></select
  //           ><!--
  //           -->
  //           <button class="trash-button">
  //           <i class="fas fa-trash"></i>
  //           </button>
  //       </div>
  //   </form>`;
  // }

  // // select can using JS to change
  // graders = document.querySelectorAll("div.grader");
  // for (let i = 0; i < graders.length; i++) {
  //   graders[i].children[3].value = objectarr[i].class_grade;
  // }
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  // Merge arrays while there are elements in both
  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number > a2[j].class_grade_number) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  // Push the remaining elements from a1, if any
  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }

  // Push the remaining elements from a2, if any
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergesort(arr) {
  // Handle empty array or array with a single element
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  // Recursively split and merge the arrays
  return merge(mergesort(left), mergesort(right));
}
