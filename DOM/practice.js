// CHATGPT PRACTICE QUESTIONS 
/*Question 1: Accessing Parent and Children
HTML:
html
Copy code
<div id="parentDiv">
  <p class="child">Child 1</p>
  <p class="child">Child 2</p>
  <p class="child">Child 3</p>
</div>*/

/*Tasks:
Access the <div> with the ID parentDiv.
Find the parent of the <div>.
Access all the <p> elements that are children of this <div>.*/

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.parentElement);
console.log(document.body.firstElementChild.children);

/*Question 2: Table Navigation
HTML:
html
Copy code
<table id="sampleTable">
  <thead>
    <tr>
      <th>Header A</th>
      <th>Header B</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cell 1A</td>
      <td>Cell 1B</td>
    </tr>
    <tr>
      <td>Cell 2A</td>
      <td>Cell 2B</td>
    </tr>
  </tbody>
</table>

Tasks:
Access the <table> element using its ID.
Retrieve the <thead> section.
Get the first row (<tr>) from the <tbody>.
Access the second cell (<td>) in the first row of the <tbody>.*/

let t=document.getElementById("sampleTable");
console.log(t);
console.log(t.firstElementChild);
console.log(t.tBodies[0].rows[0]);
console.log(t.tBodies[0].rows[0].cells[1]);

/*Question 3: Sibling Navigation
HTML:
html
Copy code
<div id="container">
  <section>
    <h2>Section 1</h2>
    <p>Paragraph 1 in Section 1</p>
  </section>
  <section>
    <h2>Section 2</h2>
    <p>Paragraph 1 in Section 2</p>
  </section>
  <section>
    <h2>Section 3</h2>
    <p>Paragraph 1 in Section 3</p>
  </section>
</div>

Tasks:
Access the second <section> element inside the <div> with the ID container.
Find the previous sibling <section> of the second <section>.
Find the next sibling <section> of the second <section>.*/

console.log(document.body.firstElementChild.firstElementChild.nextElementSibling);
console.log(document.body.firstElementChild.firstElementChild);
console.log(document.body.firstElementChild.firstElementChild.nextElementSibling.nextElementSibling);

