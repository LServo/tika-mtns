class User {
    id: number // INTERNO
    uuid: string // EXTERNO
    password: string
    hash_password: string
    nick: string
    email: string
    created_at: Date
    coplayer: [new User(), new User()]
}

const pablinhoUser =  {
    id: 3,
    uuid: "adhsudhsadu2a",
    password: "sfhdsuifhds",
    nick: "Pablinho",
    logged_in: [],
    accessToAccounts: [new User("Tikabum"), new User(("Mtns"))]
    br: [110, 87]
}

const gabrielUser =  {
    id: 2,
    uuid: "adhsudhsadu2a",
    password: "sfhdsuifhds",
    nick: "Mtns",
    logged_in: null,
    logged_in: [new User("Tikabum").ID],
    accessToAccounts: [new User("Tikabum")]
    br: 95
}

const tikabumUser = {
    id: 1,
    uuid: "adhsudhsadua",
    password: "salame",
    nick: "tikabum",
    logged_in: [new User("PAblinho").ID],
    accessToAccounts: []
    coplayers: [{
        mundo: 94,
         user_coplayer: new User("Pablinho")
        }]

    br: 33
}

Loguei Mtns:
    -> tikabum -> Consigo saber que o acesso veio do Gabriel
    -> mtns

class Account {
    nickname: string
    user_admin_id: [new User(Lucas).ID],
    coplayers: [new User(Gabriel), new User(Lucas)],
    loggedUser: 
}