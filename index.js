const localStorageKey = 'minhaLista'

$("#btn-new-task").click(function(){
if (!$("#input-new-task").val()) {
    alert('digite uma taks para se adicionada')
}
else
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    values.push({
        name: $("#input-new-task").val()
    })
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    showValues();
}
})

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = $("#to-do-list")
    list.append('')
    for(let i = 0; i < values.length; i++)
    {
        +list.append(`<li>
        <button class="right" id="square"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-square" viewBox="0 0 16 16">
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/></svg>
        </button>
        ${values[i]['name']}
        <button class="right" id="lixo">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
            </svg>
        </button>
    </li>`)
    }
}
showValues()