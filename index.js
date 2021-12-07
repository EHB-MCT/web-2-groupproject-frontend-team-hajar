

async function getData(){
    let url = `https://s7-team-tajar.herokuapp.com/challenges`
    let resp = await fetch(url);
    return await resp.json();


}


window.onload = ()=> {

    async function move(){
        let data = await getData();
        console.log(data);
    }

    move();

}

