const interestForm = () => document.querySelector("#output").innerHTML +=`
<div id = "interestForm">
<h1> New Interest </h1>
<fieldset>
<label for="places">Place </label>
<select name="places" id="places">
    <option value="1">Italy</option>
    <option value="2">Switzerland</option>
    <option value="3">France</option>
</select>

</fieldset>
<fieldset>
<label>Name</label>
    <input type="text" id="nameinput" >
</fieldset>
<fieldset>
<label>Description</label>
    <input type="text" id="descriptioninput" >
</fieldset>
<button id = "addNewInterestButton">Add New Interest</button>
</div>


`


export default interestForm