import { Link } from "react-router-dom";

function Forum(props){
    return(
        <>
<h1 style={{textAlign:"center", fontSize:"70px", letterSpacing:"10px", color:"white"}}>Forum</h1>
<div className="container-xxl main-center">

      <br/>
    
  <div className="row">     
  
      {/* <!-- end of users --> */}

          {/* start of forum post title */}
          <div className="col">
            <div className="card-body border">
              <h1 className="center" style={{letterSpacing:"7px"}}>Popular Posts</h1>
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
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Evolving Future of the Office
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingTree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Amazon's Boardroom Switch
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      CES 2021
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Linux Powered Laptop
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Standout Tech Products
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingSeven">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      2021 Premium Smart Phones
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      Whatever
                    </button>
                  </h2>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      IDK
                    </button>
                  </h2>
                </div>
              </div>   
          </div>
      </div>
    </div>
    <br/>

    {/* cards */}

  <h4 style={{textAlign:"center", letterSpacing:"5px", fontSize:"5", color:"white"}}>New Posts</h4><br/>
<div className="container" style={{textAlign: "center"}}>
<div className="row">
<div className="col">
    <div className="card" style={{width: "15rem"}}>
  <div className="card-body">
    <h5 className="card-title">CES 2021</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/somewhere" className="card-link">Card link</Link>
  </div>
  </div>
</div>
<div className="col">
<div className="card" style={{width: "15rem"}}>
  <div className="card-body">
    <h5 className="card-title">Electric Kick Scooter</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/somewhere" className="card-link">Card link</Link>
  </div></div>
  
</div>
<div className="col">
<div className="card" style={{width: "15rem"}}>
  <div className="card-body">
    <h5 className="card-title">Linux Powered Laptop</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/somewhere" className="card-link">Card link</Link>
  </div></div>
  
</div>

<div className="col">
<div className="card" style={{width: "15rem"}}>
  <div className="card-body">
    <h5 className="card-title">Whatever</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link href="/somewhere" className="card-link">Card link</Link>
  </div></div>
</div>
</div>
</div>
<br/>
        </>
    )
}
export default Forum;