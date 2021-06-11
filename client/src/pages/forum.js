import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../utils/API";
import ScrollToBottom from "react-scroll-to-bottom";
function Forum() {
  const [forumState, setForumState] = useState(null);
  useEffect(() => {
    apiCall();
  }, []);
  const apiCall = () => {
    api.getForum().then(res => {
      setForumState(res.data);
    })
  }

  return (
    <>
      <ScrollToBottom>
      <h1 style={{ textAlign: "center", fontSize: "70px", letterSpacing: "10px", color: "white" }}>Forum</h1>
      <div className="container-xxl main-center">

        <br />

        <div className="row">
          <div className="col 3">
            <div className="card-body border">
              <h1 className="center" style={{ letterSpacing: "7px" }}>Popular Posts</h1>
            </div>
            {/* end of forum post title */}

            {/* start of forum posts */}
            <div className="accordion accordion-flush" id="accordionFlushExample">
            {forumState ? forumState.map((title)=>(
              <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                {title.title}
                </button>
              </h2>
            </div>)) : <h2>We do not have data here</h2> }
            </div>
          </div>

        </div>
      </div>
      <br />

      {/* cards */}

      <h4 style={{ textAlign: "center", letterSpacing: "5px", fontSize: "5", color: "white" }}>New Posts</h4><br />
      <div className="container" style={{ textAlign: "center" }}>
        <div className="row">
          <div className="col">
            <div className="card border" style={{ width: "auto", borderRadius:"300px" }}>
            {forumState ? forumState.map((title) => (
            <div className="card-body">
            <h5 className="card-title">{title.title}</h5>
            <p className="card-text">{title.description}</p>
          </div>
          )) : <h2>We do not have data here</h2>}
              
            </div>
          </div>
        </div>
      </div>
      </ScrollToBottom>
      <br />
    </>
  )
}
export default Forum;