// https://www.youtube.com/watch?v=FJZEVmF3eDg

console.log("ajax.js loaded");

let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonClickHandler);

function buttonClickHandler() {
    console.log('You have clicked the fetchbtn');
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    // can open any form of data-json, text, html, etc

    //    get method
    // xhr.open('GET', 'test.txt', true); //true foe async

    // post methond
    xhr.open('POST', 'test.txt', true); //true foe async
    xhr.getResponseHeader('content-type', 'application/text'); //depends on data , here text


    // what to do on progress (optional)
    console.log("on progress");

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log('error occured');
        }
    }
    // send the request
    params = "newline"
    xhr.send(params);

    // xhr.send();



}

let populatebtn = document.getElementById('populatebtn');
populatebtn.addEventListener('click', populate);


function populate() {
    console.log('You have clicked the fetchbtn');
    // instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //    get method
    xhr.open('GET', 'https://dummyjson.com/products/1', true); //true foe async


    // what to do on progress (optional)
    console.log("on progress");

    // what to do when response is ready
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);

            let strobj = "";
            let list = document.getElementById('list');
            list.innerHTML = strobj;

            for (key in obj) {
                // console.log(key, obj[key]);
                strobj += `<li>${obj[key]}</li>`;
                // console.log(strobj);
            }
            list.innerHTML += strobj;

        }
        else {
            console.log('error occured');
        }
    }
    // send the request
    params = "newline"
    xhr.send(params);

    // xhr.send();



}