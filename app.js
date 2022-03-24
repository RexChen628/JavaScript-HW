const ul = document.querySelector(".siteList")

async function getStops(input) {
  const API =
    "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"
  const rawData = await fetch(API)
  const stops = await rawData.json()
  const matched_result = stops.filter((element) => element.ar.includes(input))
  matched_result.forEach((element) => {
    const ul = document.querySelector(".siteList")
    const output = `<li class="list-group-item fs-5">
    <i class="fas fa-bicycle"></i>
    ${element.sna.replace("YouBike2.0_", "")}(${element.tot})<br />
    <small class="text-muted">${element.ar}</small>
    </li>`
    ul.insertAdjacentHTML("afterbegin", output)
  })
}

document.querySelector("#searchForm").addEventListener("submit", function (e) {
  e.preventDefault()
  const searchKeyword = document.querySelector("#searchKeyword")
  if (searchKeyword.value !== "") {
    getStops(searchKeyword.value)
    ul.innerHTML = ""
  }
})
