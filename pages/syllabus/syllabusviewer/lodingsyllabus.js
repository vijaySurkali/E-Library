

const maths = ["/pages/syllabus/syllabusdata/maths1.png", "/pages/syllabus/syllabusdata/maths2.png"];
const oops = ["/pages/syllabus/syllabusdata/oops1.png", "/pages/syllabus/syllabusdata/oops1.png"];
const ds = ["/pages/syllabus/syllabusdata/ds1.png", "/pages/syllabus/syllabusdata/ds2.png"];
const logic = ["/pages/syllabus/syllabusdata/logic1.png", "/pages/syllabus/syllabusdata/logic2.png"];
const cyber = ["/pages/syllabus/syllabusdata/cyber1.png", "/pages/syllabus/syllabusdata/cyber2.png"];
let change = document.getElementById('menubar');
let dis = document.getElementById('view1');


let btnprv = document.getElementById('prev');
let btnnext = document.getElementById('next');
let info = document.getElementById('info');
let currpage = 0;
let totalpage = 1;
let viewpoint = document.getElementById('view'); 




let pageinfo = `${currpage + 1}/${totalpage + 1}`;

mathsyllabus();

function mathsyllabus() {
    const b = window.innerWidth;

    currpage = 0;
    viewpoint.setAttribute('src', maths[currpage]); 
    pageinfo = `${currpage + 1}/${totalpage + 1}`


}

function oopsyllabus() {
    currpage = 0;
    viewpoint.setAttribute('src', oops[currpage]);
    pageinfo = `${currpage + 1}/${totalpage + 1}`

  uni();
  
 

}
function Dtatastructures() {
    currpage = 0;
    viewpoint.setAttribute('src', ds[currpage]);
    pageinfo = `${currpage + 1}/${totalpage + 1}`


}
function logicsyllabus() {
    currpage = 0;
    viewpoint.setAttribute('src', logic[currpage]);
    pageinfo = `${currpage + 1}/${totalpage + 1}`


}
function cybersyllabus() {
    currpage = 0;
    viewpoint.setAttribute('src', cyber[currpage]);
    pageinfo = `${currpage + 1}/${totalpage + 1}`


    
uni();
}







btnnext.onclick = function () {
    currpage = 1;
    viewpoint.setAttribute('src', maths[currpage]);
    pageinfo = `${currpage + 1}/${totalpage + 1}`
    info.innerText = pageinfo;
}

btnprv.onclick = function () {
    currpage = 0;
    viewpoint.setAttribute('src', maths[currpage]);
    pageinfo = `${currpage + 1}/${totalpage + 1}`
    info.innerText = pageinfo;

}

