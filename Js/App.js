let $ = document

let searchBtn = $.querySelector('#btnSearch')
let category = document.querySelector('#selectCategory')
let jobetype = document.querySelector('#selectJobtype')
let compName = $.querySelector('#compName')
let tags = $.querySelector('#tags')
let search = $.querySelector('#search')
let cardContaner = $.querySelector('#result')

let categoryVal = ''
let jobetypeVal = ''

// Create card Item 


function createCard(x) {
    cardContaner.insertAdjacentHTML('beforeend', `
    <div id="card-container" class="card col-md-12 col-sm-12">
    <div class="card-body ">

                        <div class="row">

                            <div class="img  col-md-3 col-sm-12">
                                <img src=${x.company_logo}>
                            </div>

                            <div class="prembale col-md-9 col-sm-12">

                                <span class="comp-name">${x.company_name}</span><br>
                                <span class="comp-loc">${x.candidate_required_location}</span>
                            </div>
                        </div>
                        <br>
                        <div class="tozihat-job">

                            <h1>${x.title}</h1><br>
                            <h4> - Category : <span> ${x.category} </span></h4>
                            <h4> - Job Type : <span> ${x.job_type} </span></h4>

                            <div class="Description">
                                <label> - Description :</label><br>
                                ${x.description}
                            </div>

                            <label> - Salary : </label><span>${x.salary}</span>

                            <h4> - Tags</h4>
                            <div class="tags-item">

                                ${createTags(x)}
                            </div>

                        </div>
                        <div class="d-flex  flex-row-reverse align-items-center max-width">
                            <button type="button" class="btn btn-primary btn-lg">Apply</button>
                            <div class="saveid" onclick ="logID(this.id)" id="${x.id}"> &#9734;</div>
                        </div>
                    </div>
                </div>

                
    `)
}

// SAVE id

let itemID = []
function logID(e) {

    itemID.push(e)
    localStorage.setItem('itemID', itemID) 
}

function createTags(x) {
   return `<div class = "box-item">${x.tags}</div>`
}


// Selected elements

category.addEventListener('change', () => {

    if (category.value === 'All categories') {
        categoryVal = ''
    } else {
        categoryVal = category.value
    }

})

jobetype.addEventListener('change', () => {

    if (jobetype.value === 'All Types') {
        jobetypeVal = ""
    }
    else if (jobetype.value === 'full_time') {
        jobetypeVal = "full_time"
    }
    else {
        jobetypeVal = "part_time"
    }

})

// Button operation

function checkJobtype(res) {

    cardContaner.innerHTML = ""
    for (let x of res) {

        let jobtypeApi = x[1].job_type
        let compNameApi = x[1].company_name
        let tagsApi = x[1].tags
        let searchApi = x[1].title


        if (jobetypeVal === '') {
            checkCompname(x, compNameApi, searchApi, tagsApi)
        }
        else if (jobetypeVal === jobtypeApi) {
            checkCompname(x, compNameApi, searchApi, tagsApi)
        }

    }
}

function checkCompname(x, compnameApi, searchApi, tagsApi) {
    if (compName.value === '') {

        checksearch(x, searchApi, tagsApi)
    }
    else if (compName.value === compnameApi) {

        checksearch(x, searchApi, tagsApi)
    }
}

function checksearch(x, searchApi, tagsApi) {

    if (search.value === "") {
        checktags(x, tagsApi)
    }
    else if (search.value === searchApi) {
        checktags(x, tagsApi)
    }

}



function checktags(x, tagsApi) {


    if (tags.value === '') {
        createCard(x[1]);
    }
    else {

        tagsApi.forEach(
            (tagsApi) => {

                let kam = tagsApi.toLowerCase().includes(tags.value.toLowerCase());

                if (kam) {
                    createCard(x[1])
                }


            }
        )
    }
}

// Main start

searchBtn.addEventListener('click', () => {
    if (categoryVal) {
        fetch(`https://remotive.com/api/remote-jobs?category=${categoryVal}`)
            .then(res => res.json())
            .then(res => res.jobs)
            .then(res => Object.entries(res))
            .then(res => checkJobtype(res))
    }
    else {
        fetch('https://remotive.com/api/remote-jobs')
            .then(res => res.json())
            .then(res => res.jobs)
            .then(res => Object.entries(res))
            .then(res => checkJobtype(res))
    }
})
