

export const UpdateCountryForm = () => {
  return (
    <>
     <section className="section-update">
            <h1>Update <span>Country</span> </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Sed rerum sapiente cumque ducimus autem in, quos voluptatem
            </p>
            <section className="container-update">
                <input type="text" placeholder="Code"/>
                <input type="text" placeholder="Name" disabled/>
                <input type="text" placeholder="Capital" disabled/>
                <input type="text" placeholder="Continent" disabled/>
                <input type="text" placeholder="Currency" disabled/>
                <input type="text" placeholder="Languages" disabled/>

            </section>
            <div className="button-update">
            <button>update country</button>
            <button>delete country</button>
            </div>

        </section>
    </>
  )
}
