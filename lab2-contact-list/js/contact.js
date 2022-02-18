$(() => {
    let searchParams = new URLSearchParams(window.location.search);
    let id = -1;
    if (searchParams.has('id')) {
        id = parseInt(searchParams.get('id'));
        let contact = contacts.find(contact => contact.id === id);
        $('#id').val(contact.id);
        $('#f_name').val(contact.f_name);
        $('#l_name').val(contact.l_name);
        $('#phone').val(contact.phone);
        $('#email').val(contact.email);
    }
    $('#save').on('click', () => {
        if (id === -1) {
            addContact({
                id: -1,
                f_name: $('#f_name').val(),
                l_name: $('#l_name').val(),
                phone: $('#phone').val(),
                email: $('#email').val()
            });
        } else {
            updateContact({
                id: parseInt($('#id').val()),
                f_name: $('#f_name').val(),
                l_name: $('#l_name').val(),
                phone: $('#phone').val(),
                email: $('#email').val()
            });
        }
        $(location).attr('href', 'index.html');
    });
});
