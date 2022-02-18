$(() => {
    let table = $("#contacts_table");
    let contactRow;
    for (let contact of contacts) {
        contactRow = `<tr>
                        <td>${contact.f_name} ${contact.l_name}</td>
                        <td class="text-right">
                            <a href="contact.html?id=${contact.id}" class="btn btn-outline-secondary">
                                <i class="fa fa-fw fa-edit"></i>
                            </a>
                            <button type="button" class="btn btn-outline-danger rem-row" dep_id="${contact.id}">
                                <i class="fa fa-fw fa-trash"></i>
                            </button>
                        </td>
                  </tr>`;
        table.append(contactRow);
    }
    $('.rem-row').on('click', function () {
        deleteContact(parseInt($(this).attr("dep_id"), 10))
        location.reload();
    })
});


