//console.log("Hello World")
//let name = "            Anees              ";
//let age = 24;
//let hair = true;
//let employed = null;

//let data = [name, age, hair, employed]

//for (let data_point of data) {
//    console.log(data_point)
//}

//console.log(name);
//console.log(name.trim());

//console.log(name.toLowerCase());
//console.log(name);

//console.log(name.toUpperCase());
//console.log(name)

//let speed = 50;

//console.log(speed * 2)
//console.log(speed + 2)
//console.log(speed / 2)
//console.log(speed - 2)
//console.log(speed % 2)

//console.log(Math.floor(Math.random() * speed))
//console.log(Math.floor(Math.random() * speed))

//let speed = 50;
//let _temp = 0;
//while (_temp != 50) {
//    _temp = Math.floor((Math.random() * speed)+1);
//    console.log(_temp)
//}

//let speed = 50;
//let collection = [10, 20, 30, 22, 11, 9];
//console.dir(collection);
//console.log(Math.max(...collection));

//console.log(value_a);
//console.log(value_b);

//let value_a = "a";
//let value_b = "b";

//let daysInYear = 365;
//let weeksInYear = 52;
//let daysInWeek = 7;

//console.log(daysInYear + 1);
//let workingDays = daysInWeek -2;
//console.log(workingDays);
//console.log(workingDays * 52);
//console.log(weeksInYear / 12)

//let a = 1;
//a++;
//a++;
//a++;
//a++;
//a++;
//a--;
//a--;
//console.log(a)

//let first_name = "Anees"
//let age = 24;
//let role = "Associate Consultant";

//console.log(`${first_name} is a ${age} year old ${role}`)

//let first_name = "Anees"
//let age = 24;
//let parking_space = true;

//console.log(typeof first_name);
//console.log(typeof age);
//console.log(typeof parking_space);

//if (typeof first_name == 'string') {
  //  console.log(`${first_name} is a string`)
//} else {
  //  console.log(`${first_name} is not a string`)
//}

//let num_age = 34;
//let alpha_age = 34;

//if (num_age == 34) {
  //  console.log("== number number")
//} else {
  //  console.log("== not number number")
//}

//if (num_age == "a") {
  //  console.log("== number number")
//} else {
  //  console.log("== not number number")
//}

//if (num_age === 34) {
  //  console.log("=== number number")
//} else {
  //  console.log("=== not number number")
//}

//if (num_age === "34") {
  //  console.log("=== number number")
//} else {
  //  console.log("=== not number number")
//}

//let role = "dev";

//switch (role) {
  //  case 'dev':
    //    console.log('dev salary 5p');
    //    break;
  //  case 'devops':
    //    console.log('devops salary 10p');
    //    break;
  //  case 'tester':
    //    console.log('tester salary 7p');
    //    break;
  //  default:
    //    console.log('role not recognised')
//}

//let role = 'devops'
//let age = 16

//if (role === 'devops' || age > 18) {
  //  console.log("Hire Me")
//} else {
  //  console.log("get rekt")
//}

//const mixedData = ['hello', 12, 'tester', 872, 'developer', 'automation', 34, true, false];

//const onlyText = mixedData.filter(mData => {
  //  return typeof mData === 'string';
//});

//console.log(onlyText)

//let numbers = []
//for (let number = 0; number < 1000; number++) {
  //  numbers.push(number);
//}

//const below250 = numbers.filter(number => {
  //  return number < 250
//})

//console.log(below250)

//const deskItems = ['laptop', 'charger', 'mouse', 'food'];

//const foundItem = deskItems.findIndex(deskItems => {
  //  return deskItems === 'mouse';
//});

//console.log(foundItem)

//const startsWithC = deskItems.findIndex(deskItems => {
  //  return deskItems[0] === 'c';
//});

//console.log(startsWithC)

//const numberedItems = [1, 5, 8, 15, 68, 89, 101];

//const summedNumItems = numberedItems.reduce((accumulator, currentVal) => {
//    return accumulator + currentVal
//}, 150);

//console.log(summedNumItems);

function changeBgColor(){
    alert("Hello World")
    let elements = document.getElementsByTagName("body");
    for (let element of elements) {
        element.style.backgroundColor = "#FFFFFF";
    }
}

function increasePTextSize(){
    alert("Increase paragraph text Size")
    let elements = document.getElementsByTagName("p");
    for (let element of elements) {
        element.style.fontSize = "36px";
    }
}

function decreasePTextSize(){
    alert("Increase paragraph text Size")
    let elements = document.getElementsByTagName("p");
    for (let element of elements) {
        element.style.fontSize = "14px";
    }
}

function increaseLiTextSize(){
    alert("Increase list item text Size")
    let elements = document.getElementsByTagName("li");
    for (let element of elements) {
        element.style.fontSize = "20px";
    }
}

function analyseForm(){
    alert("Hello " + document.getElementById('first_name').value + " " + document.getElementById('last_name').value + ". Your email address: "  + document.getElementById('email').value + " has been added to our mailing list.");
}

function selectedAgeWage() {
    let ageRadioButtons = document.getElementsByName("age_radio_collection");
    for(var a = 0; a < ageRadioButtons.length; a++) {
        if (ageRadioButtons[a].checked) {
            alert(ageRadioButtons[a].value);
        }
    }
}

function hide() {
    let hide_checkbox = document.getElementById("hide");
    let unorderedLists = document.getElementsByTagName("ul");
    if (hide_checkbox.checked) {
        //hide_checkbox.hidden = false;
        for (let ul of unorderedLists) {
            ul.hidden = true;
        }
    } else {
        //hide_checkbox.hidden = true;
        for (let ul of unorderedLists) {
            ul.hidden = false;
        }
    }
}