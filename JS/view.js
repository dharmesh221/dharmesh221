let url = 'https://646d9fd09c677e23218a2853.mockapi.io/students'
let form = document.forms["create"]
let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get('id')

async function getData(){
    if(id || id ===0)
    {
        let res = await fetch(`${url}/${id}`)
        let data = await res.json()

        form.firstname.value = data.firstname
        form.lastname.value = data.lastname
        form.email.value = data.email
        form.mobile.value = data.mobile
        form.batch.value = data.batch

    }
    else
    {
        window.location.href = '/'
    }

}
getData()

async function getValues(event)
{
    event.preventDefault();

    if(form.firstname.value && form.lastname.value && form.email.value && form.mobile.value && form.batch.value)
    {
        let student = {
            firstname:form.firstname.value,
            lastname:form.lastname.value,
            email:form.email.value,
            mobile:form.mobile.value,
            batch:form.batch.value,
            status:true
        }


       let res = await fetch(`${url}/${id}`,
        {
            headers: {
                "Content-Type": "application/json",
              },
            method:'PUT',
            body:JSON.stringify(student)});
            let data = res.json()

            window.location.href = '/'
    }
    else
    {
        alert("All Fields are required")
    }
}

form.addEventListener('submit',getValues)