let url = "https://catfact.ninja/fact";
let btn = document.querySelector("button");

btn.addEventListener("click" ,async () => {
    let fact = await getCatFact();
    let p = document.querySelector("#randomfact");
    p.innerText = fact;
})

async function getCatFact() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        return "Oops! Could not fetch a cat fact.";
        console.log(e);
    }
}
