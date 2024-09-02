const Autokozmetika = () => {
    return ( 
        // prazni tagovi sluze kao wrappper, posto mozemo imati samo jedan parent element
        <>  
            <div class="cta py">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6"></div>
                        <div class="col-md-6 p-5">
                            <h2>AUTOKOZMETIKA KOJA PODIZE STANDARD!</h2>
                            <p class="my-4">Nasa autokozmetika donosi potpunu transformaciju Vaseg automobila. Ocekujte sjaj boje,
                                cist automobil i sve sto Vam je potrebno za vrhunsko iskustvo voznje.
                            </p>
                            <a href="" class="btn btn-warning">Prodavnica</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="message py">
                <h2 class="text-center text-white fw-bold">Sve na jednom mjestu, <br/> sve Vama</h2>
            </div>
        </>
    );
};

export default Autokozmetika;