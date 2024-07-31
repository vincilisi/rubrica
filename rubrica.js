let rubrica ={
    'contacts': [
        {'nome': 'Nicola', 'telefono': '3331111111'},
        {'nome': 'Lorenzo', 'telefono': '3332222222'},
        {'nome': 'Paola', 'telefono': '3333333333'},
        {'nome': 'Jenny', 'telefono': '3334444444'}
    ],

    mostraTuttiContatti: function() {
        for (const contatto of this.contacts) {
            console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`);
        }
    },
    mostraContattoSingolo: function(nome) {
        const contatto = this.contacts.find(c => c.nome === nome);
        if (contatto) {
            console.log(`Nome: ${contatto.nome}, Telefono: ${contatto.telefono}`);
        } else {
            console.log(`Contatto non trovato per il nome "${nome}"`);
        }
    },
    eliminaContatto: function(nome) {
        const index = this.contacts.findIndex(c => c.nome === nome);
        if (index !== -1) {
            this.contacts.splice(index, 1);
            console.log(`Contatto "${nome}" eliminato`);
        } else {
            console.log(`Contatto non trovato per il nome "${nome}"`);
        }
    },
    aggiungiContatto: function(nome, telefono) {
        this.contacts.push({ nome, telefono });
        console.log(`Contatto "${nome}" aggiunto`);
    },
    modificaContatto: function(nome, nuovoTelefono) {
        const contatto = this.contacts.find(c => c.nome === nome);
        if (contatto) {
            contatto.telefono = nuovoTelefono;
            console.log(`Telefono del contatto "${nome}" modificato`);
        } else {
            console.log(`Contatto non trovato per il nome "${nome}"`);
        }
    }
}









rubrica.mostraTuttiContatti()
rubrica.mostraContattoSingolo("Jenny")
rubrica.eliminaContatto("Nicola")
rubrica.aggiungiContatto("Vincenzo, 3333332222111")
rubrica.modificaContatto("Paola, 332211")