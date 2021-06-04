import "./nav.css";

function Home(){
    return(
        <>
        {/* start of nav */}
        <br/>
        <nav className="navbar navbar-expand-lg navbar-light navstyle">
    <div className="container-fluid">
      <a className="nav-link active navtext" href="/some/valid/uri">ChadChat</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link navtext" aria-current="page" href="/some/valid/uri">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br></br>
  {/* end of nav */}

  <div className="container-fluid main-center">
      <br></br>
        {/* might use this later not sure */}
        {/* <div className="card-body border">
            <h1 className="center">Tech Stuff</h1>
          </div> */}
          
  <div className="row">
      {/* <!-- start of users --> */}
          <div className="col">
            <div className="card-header userStyle">Users</div>
          <div className="card-body">
          <h5 className="card-title">Primary card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
        </div>
      {/* <!-- end of users --> */}

          {/* start of forum post title */}
          <div className="col-5" >
            <div className="card-body border">
              <h1 className="center">Tech Stuff</h1>
          </div>
          {/* end of forum post title */}

          {/* start of forum posts */}
<div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Electric Kick Scooter
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Artificial Intelligence
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      Apple WWDC
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                  </div>
                </div>
              </div>   
          </div>
          {/* end of forum posts */}

          {/* <!-- start of messenger --> */}
          <div className="col">
            <div className="card text-white bg-dark mb-3" >
            <div className="card-header">Messenger</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
        </div>  
        </div> 
      </div>
    </div>
        </>
    )
}
export default Home;