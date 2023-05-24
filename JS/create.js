let form = document.forms["create"]
let url = 'https://646d9fd09c677e23218a2853.mockapi.io/students'

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


       let res = await fetch(url,
        {
            headers: {
                "Content-Type": "application/json",
              },
            method:'POST',
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