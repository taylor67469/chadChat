function Home(){
    return(
        <>
        {/* start of nav */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="/some/valid/uri">ChadChat</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/some/valid/uri">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/some/valid/uri">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/some/valid/uri">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="/some/valid/uri" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  {/* end of nav */}

  <div className="container main-center">
        <div className="card-body border">
            <h1 className="card-title">Steve Jobs is back as CEO</h1>
            {/* <!-- <p className="card-text">Steve Jobs is back as CEO.</p> --> */}
          </div>
        
        <div className="row">
             {/* <!-- start of users --> */}
          <div className="col" style={{"max-width": "30rem;"}}>
            <div className="card-header">Users</div>
  <div className="card-body">
    <h5 className="card-title">Primary card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
          </div>

          {/* <!-- start of forum post --> */}
          <div className="col border rounded" style={{"max-width": "30rem"}}>
            <h1>Forum post</h1>
            <div className="card">
                <div className="card-body border">
                  <p>Random Post</p>
                </div>
                <div className="card-body border">
                    <p>Random Post</p>
                  </div>
                  <div className="card-body border">
                    <p>Random Post</p>
                  </div>
              </div>
          </div>

          {/* <!-- start of messenger --> */}
          <div className="col">
            <div className="card text-white bg-dark mb-3" style={{"max-width": "30rem;"}}>
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