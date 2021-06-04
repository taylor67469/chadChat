function ForumPost() {
    return (
        <div>

            <div className="card">
                <div className="card-header">
                    <h1>Forum Title</h1>
                    <input type="text" placeholder="Forum Title" id="fTitle"></input>
                </div>
                <div className="card-body">
                    <h1>Forum Post</h1>
                    <input type="text" placeholder="Forum Post" id="fPost"></input>
                </div>
            </div>
        </div>
    )
}
export default ForumPost;