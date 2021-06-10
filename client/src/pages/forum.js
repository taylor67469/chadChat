function Forum(){
    return(
        <>
<h1 style={{textAlign:"center", fontSize:"70px", letterSpacing:"10px", color:"white"}}>Forum</h1>
<div className="container-fluid main-center">

      <br/>
    
  <div className="row">
      {/* <!-- start of users --> */}
          <div className="col-2">
            <div className="card-header cardStyle">Users</div>
          <div className="card-body userstyle">
          <a href="http://www.google.com" target="_blank">
            <img src="https://i.pravatar.cc/150?img=4" alt="icon" class="float-left rounded-circle" style={{"width": "40px"}}/>
            </a><br/>
            <h4>Zach</h4><hr/><br/>
          <a href="http://www.google.com" target="_blank">
            <img src="https://i.pravatar.cc/150?img=3"  alt="icon" class="float-left rounded-circle" style={{"width": "40px"}} />
            </a><br/>
            <h4>Alfredo</h4><hr/><br/>
            <a href="http://www.google.com" target="_blank">
          <img src="https://i.pravatar.cc/150?img=2"  alt="icon" class="float-left rounded-circle" style={{"width": "40px"}}/>
          </a><br/>
          <h4>Angel</h4><hr/><br/>
          <a href="http://www.google.com" target="_blank">
          <img src="https://i.pravatar.cc/150?img=12" alt="icon" class="float-left rounded-circle" style={{"width": "40px"}}/>
          </a><br/>
          <h4>Xavier</h4><hr/><br/>
         
          
  </div>
        </div>
      {/* <!-- end of users --> */}

          {/* start of forum post title */}
          <div className="col-10">
            <div className="card-body border">
              <h1 className="center">Popular Posts</h1>
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
          {/* end of forum posts */}

          {/* <!-- start of chat box --> */}
          





            
            
      </div>
    </div>
        </>
    )
}
export default Forum;