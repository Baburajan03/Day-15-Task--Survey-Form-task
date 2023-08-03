let header = document.createElement('h2')
header.classList.add('ms-5','mt-2')
header.innerHTML = `Survey Form`
document.body.appendChild(header)

// ----------------------------------------------------------------------------


let form = document.createElement('form')
form.setAttribute('id','surveyform')
document.body.appendChild(form)

let container = document.createElement('div')
container.classList.add('container')
form.appendChild(container)

let row1 = document.createElement('div')
row1.classList.add('row')
container.appendChild(row1)

let row1col1 = document.createElement('div')
row1col1.classList.add('col-3')
row1col1.innerHTML = `<label class="m-1" for="firstname"><b>First Name :</b></label>
<input id="firstname" type="text" class="form-control" name="firstname" placeholder="FirstName" required>`
row1.appendChild(row1col1)

let row1col2 = document.createElement('div')
row1col2.classList.add('col-3')
row1col2.innerHTML = `
<label class="m-1" for="lastname"><b>Last Name :</b></label>
<input id="lastname" type="text" class="form-control" name="lastname" placeholder="LastName" required>`
row1.appendChild(row1col2)

// ----------------------------------------------------------------------------

let row2 = document.createElement('div')
row2.classList.add('row')
container.appendChild(row2)

let row2col1 = document.createElement('div')
row2col1.classList.add('col-4')
row2col1.innerHTML = `<label class="m-1" for="address"><b>Address :</b></label>
<textarea id="address" type="text" class="form-control" name="address" placeholder="Type your address" required></textarea>`
row2.appendChild(row2col1)

let row2col2 = document.createElement('div')
row2col2.classList.add('col-3')
row2col2.innerHTML =`
<label class="m-1" for="pincode"><b>Pincode :</b></label>
<input id="pincode" type="text" class="form-control" name="pincode" placeholder="Pincode" required>`
row2.appendChild(row2col2)

// ----------------------------------------------------------------------------


let row3 = document.createElement('div')
row3.classList.add('row')
container.appendChild(row3)

let row3col1 = document.createElement('div')
row3col1.classList.add('col')
row3col1.innerHTML = `
<h6 class="m-1"><b>Gender :</b></h6>
<input class="ms-2" id="male" name="gender" type="radio" value="Male" required >
<label class="m-1" for="gender">Male</label>
<input class="ms-2" id="female" name="gender" value="Female" type="radio">
<label class="m-1" for="gender">Female</label>`
row3.appendChild(row3col1)

// ----------------------------------------------------------------------------


let row4 = document.createElement('div')
row4.classList.add('row')
container.appendChild(row4)

let row4col1 = document.createElement('div')
row4col1.classList.add('col')
row4col1.innerHTML = `

<h6 class="m-1"><b>Choice of Food (Select at least 2) :</b></h6>
<input class="ms-2" type="checkbox" name="food" value="Burger"> Burger
<input class="ms-2" type="checkbox" name="food" value="Pizza"> Pizza
<input class="ms-2" type="checkbox" name="food" value="Pasta"> Pasta
<input class="ms-2" type="checkbox" name="food" value="Salad"> Salad
<input class="ms-2" type="checkbox" name="food" value="Ice Cream"> Ice Cream`
row4.appendChild(row4col1)

// ----------------------------------------------------------------------------


let row5 = document.createElement('div')
row5.classList.add('row')
container.appendChild(row5)

let row5col1 = document.createElement('div')
row5col1.classList.add('col-4')
row5col1.innerHTML = `<label class="m-1" for="state"><b>State :</b></label>
<input id="state" type="text" class="form-control" name="state" placeholder="State" required>`
row5.appendChild(row5col1)

let row5col2 = document.createElement('div')
row5col2.classList.add('col-4')
row5col2.innerHTML = `<label class="m-1" for="country"><b>Country :</b></label>
<input id="country" type="text" class="form-control" name="country" placeholder="country" required>`
row5.appendChild(row5col2)

// ----------------------------------------------------------------------------


let row6 = document.createElement('div')
row6.classList.add('row','mt-3')
container.appendChild(row6)

let row6col1 = document.createElement('div')
row6col1.classList.add('col-3')
row6col1.setAttribute('onclick', 'appendtable()')
row6col1.innerHTML = `<input class="btn btn-primary" id="submit" type="submit" class="form-control"  placeholder="country">`
row6.appendChild(row6col1)

// ----------------------------------------------------------------------------


let row7 = document.createElement('div')
row7.classList.add('row','mt-3')
container.appendChild(row7)

let row7col1 = document.createElement('div')
row7col1.classList.add('col')
row7col1.setAttribute('onclick', 'appendtable()')
row7.appendChild(row7col1)

let table = document.createElement('table')
    table.setAttribute('id','table')
    table.classList.add('mt-5','table-bordered')
    table.innerHTML= `<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Address</th>
    <th>Pincode</th>
    <th>Gender</th>
    <th>Food</th>
    <th>State</th>
    <th>Country</th>
  </tr>`
  row7.appendChild(table) 



function appendtable() {
    event.preventDefault()
  let firstname = document.getElementById('firstname').value
  let lastname = document.getElementById('lastname').value
  let address = document.getElementById('address').value
  let pincode = document.getElementById('pincode').value
  let gender = document.querySelector('input[name="gender"]:checked').value
  let foodchecked = document.querySelectorAll('input[name="food"]:checked')
  let food = Array.from(foodchecked).map(checkbox => checkbox.value).join(", ")
  let state = document.getElementById("state").value
  let country = document.getElementById("country").value
  let surveytable = document.getElementById('table')
    let newrow = surveytable.insertRow(-1)
    let cells = [
      firstname,
      lastname,
      address,
      pincode,
      gender,
      food,
      state,
      country
    ]

    for (let i = 0; i < cells.length; i++) {
      let cell = newrow.insertCell(i)
      cell.textContent = cells[i]
    }

    document.getElementById("surveyform").reset()
}

  











