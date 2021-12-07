window.onload = () => {
    move();
    getForm();
}
let list = [];

async function getData() {
    let url = `https://s7-team-tajar.herokuapp.com/challenges`
    let resp = await fetch(url);
    return await resp.json();
}

async function move() {
    let data = await getData();
    postForm();
    //   console.log(data);

}

function postForm() {
    const formData = {
        name: document.getElementById("name").value,
        points: document.getElementById("points").value,
        course: document.getElementById("course").value,
        session: document.getElementById("session").value,
    };

    document.getElementById('forms').addEventListener('submit', (event) => {
        event.preventDefault();
        fetch('https://s7-team-tajar.herokuapp.com/saveChallenges', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            }).then(response => response.json())
            .then(data => {
                console.log('Has been submitted!:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    });
}


async function getForm() {
    await fetch(`https://s7-team-tajar.herokuapp.com/challenges`)
        .then(response => response.json())
        .then(data => {
            console.log("get data from heroku");
            console.log(data);
            list = data.results;
        })
    console.log('make a foreach with the data');
    list.forEach(element => {
        console.log("test")

    });


}