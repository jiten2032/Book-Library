let Form = document.getElementById("form");
Form.addEventListener('submit', AddBook);
function AddBook(e) {
    let Name = document.getElementById("inputName").value;
    let Author = document.getElementById("inputAuthor").value;
    let Type;
    let Programming = document.getElementById("Programming");
    let Cooking = document.getElementById("Cooking");
    let Psycology = document.getElementById("Psycology");
    if (Programming.checked) {
        Type = Programming.value;

    }
    else if (Cooking.checked) {
        Type = Cooking.value
    }
    else if (Psycology.checked) {
        Type = Psycology.value
    }

    let Clear = `<button type="button" id="Delet">Delet</button>`;
   
  
 
    let book = new Book(Name, Author, Type, Clear);
    let display = new Display();
    display.add(book);
    display.clear()


    e.preventDefault();
}