const url = 'http://localhost:3000'
const form = document.querySelector('.divInsert')
const text = document.querySelector('input')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const ul = document.querySelector('ul')




form.addEventListener('submit', async function(e){
  e.preventDefault()
  let data = text.value
  try{
      const response = await fetch(`${url}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
         description: data,
         status: false,
        }),
      }); 
      data = await response.json()
      console.log(data)
      console.log('sucesso')
  }catch(e){
    console.log(e)
  }
})

async function loadItens() {
  try {
    const response = await fetch('http://localhost:3000');
    const responseFile = await response.json();
    responseFile.forEach((item, i) => {
    insertItemTela(item.description, item.status,item.id)
    })
  } catch (e) {
    console.log(e)
  }

}

function insertItemTela(text, status, i) {
  const li = document.createElement('li')

  li.innerHTML = `
  <div class="divLiContainer">
  <div class="divLi">
    <input type="checkbox" data-i=${i} onchange="done(this, ${i});" />
    <span data-si=${i}>${text}</span>
    <button onclick="removeItem(${i})" data-i=${i}>Excluir</button>
  </div>
  </div>
  `
  ul.appendChild(li)

  if (status) {
      document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
      document.querySelector(`[data-i="${i}"]`).checked = true
  } else {
      document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
      document.querySelector(`[data-i="${i}"]`).checked = false
  }


  text.value = ''
}

async function done(chk, i) {
  try{
    if(chk.checked){
      await fetch(`${url}/${i}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
	        status: true,
        }),
      }); 
    }else{
      await fetch(`${url}/${i}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
	        status: false,
        }),
      });
    }
  }catch(e){
    console.log(e)
  }
}

async function removeItem(i) {
  try{
    await fetch(`${url}/${i}`, {method: 'DELETE'}); 
  }catch(e){
    console.log(e)
  }
 
}

loadItens()