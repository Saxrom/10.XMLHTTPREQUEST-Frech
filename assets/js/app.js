function SendRequest(){
    fetch('students.json')
    .then(response => response.json())
    .then(data => {
        let item = '';
        data.forEach(person => {
            item += `
            <div class="col-lg-4">
                    <div class="card">
                        <img class="card-img-top" src="${person.image}" alt="...">
                        <div class="card-body">
                          <h5 class="card-title">${person.name}</h5>
                          <p class="card-text">${person.age} years old</p>
                          <a href="#" class="btn btn-primary">Goooo</a>
                        </div>
                    </div>
            </div>
            `
        })

        document.getElementById('list').innerHTML = item;
    })
    .catch(error => console.log(error))
}