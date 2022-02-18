let contacts_json = localStorage.getItem("contacts_json");
let contacts;
if (!contacts_json || contacts_json === '[]') {
    contacts = [
        {
            id: 1,
            f_name: "Максим",
            l_name: "Малімон",
            phone: "0546546546",
            email: "max@phone.ua"
        },
        {
            id: 2,
            f_name: "Олександр",
            l_name: "Лебединський",
            phone: "0884353451",
            email: "lebed@phone.ua"
        },
        {
            id: 3,
            f_name: "Олександр",
            l_name: "Назарчук",
            phone: "0917456123",
            email: null
        }
    ];
    localStorage.setItem("contacts_json", JSON.stringify(contacts));
} else {
    contacts = JSON.parse(contacts_json);
}

function addContact(contact) {
    contact.id = Math.max.apply(Math, contacts.map(cont => cont.id)) + 1;
    contacts.push(contact);
    saveContacts();
}

function updateContact(cont) {
    let contact = contacts.find(c => c.id === cont.id);
    // contact.id = cont;
    contact.f_name = cont.f_name;
    contact.l_name = cont.l_name;
    contact.phone = cont.phone;
    contact.email = cont.email;
    saveContacts();
}

function deleteContact(id) {
    contacts = contacts.filter(dep => dep.id !== id);
    saveContacts();
}

function saveContacts() {
    localStorage.setItem("contacts_json", JSON.stringify(contacts));
}
