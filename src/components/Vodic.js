const Vodic = () => {
    const items = [
        {
            title: 'Istrazite nasu kolekciju',
            content: `Pogledajte nasu siroku ponudu autokozmetickih proizvoda. Kategorizovani proizvodi za lako pretrazivanje: od zastite boje do brze njege.`
        },
        {
            title: 'Edukativni resursi',
            content: `Pogledajte nasu siroku ponudu autokozmetickih proizvoda. Kategorizovani proizvodi za lako pretrazivanje: od zastite boje do brze njege.`
        },
        {
            title: 'Kupovina na jedan klik',
            content: `Prijavite se kako biste imali brz pristup svojoj historiji kupovine i brze odvijali kupovinu.`
        },
        {
            title: 'Top proizvodi',
            content: `Pogledajte nasu siroku ponudu autokozmetickih proizvoda.
                    Kategorizovani proizvodi za lako pretrazivanje: od zastite boje do brze njege. `
        },
        {
            title: 'Korpa za kupovinu',
            content: `Dodajte proizvode u korpu jednostavnim klikom na dugme "Dodaj u korpu". Pogledajte korpu kad god zelite - 
                    jednostavno pristupite u gornjem desnom uglu.`
        },
        {
            title: 'Kontaktirajte nas',
            content: `Ako imate bilo kakva pitanja ili Vam je potrebna pomoc, posjetite stranicu Kontaktirajte Nas ili koristite Chat opciju u donjem desnom uglu.`
        },
    ]


    return (
        <section className="vodic container">
            <h2 className="mb-5 text-center">Kako najbolje iskoristiti nas webshop: </h2>
            <div className="row justify-content-between">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="col-md-5">
                            <h3>{item.title}</h3>
                            <p>{item.content} </p>
                        </div>
                    )
                })}
            </div>
        </section>
    );
};

export default Vodic;