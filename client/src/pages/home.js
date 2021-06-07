import "./home.css";

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
          
  <div className="row">
      {/* <!-- start of users --> */}
          <div className="col">
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
          <div className="col-6" >
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
          <div className="col">
          <div className="card">
              <div className="d-flex flex-row justify-content-between p-3 adiv text-white"> <i className="fas fa-chevron-left"></i> <span className="pb-3">ChadChat</span> <i className="fas fa-times"></i> </div>
              <div className="d-flex flex-row p-3"> <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png" alt="icon" width="30" height="30"/>
                  <div className="chat ml-2 p-3"><span>Yo this project is due tomorrow!!</span></div>
              </div>
              <div className="d-flex flex-row p-3">
                  <div className="chat-orange mr-2 p-3"><span>I don't care, finish it yourself son.</span></div> <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png"  alt="icon" width="30" height="30"/>
              </div>
              <div className="d-flex flex-row p-3"> <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-7.png" alt="icon" width="30" height="30"/>
                  <div className="myvideo ml-2"><img src="https://s36700.pcdn.co/wp-content/uploads/2018/02/A-dog-growling-and-looking-angry.jpg.webp" alt="icon" width="200"/></div>
              </div>
              <div className="d-flex flex-row p-3"> <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7.png" alt="icon" width="30" height="30"/>
                  <div className="chat-orange ml-2 p-3"><span>. . . .</span></div>
              </div>
              <div className="form-group px-3"> <textarea className="form-control" rows="5" placeholder="Type your message"></textarea> </div>
          </div>





            
            </div>
      </div>
    </div>
        </>
    )
}
export default Home;