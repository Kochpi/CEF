function GithubModal({ user }) {
  
    return (
    <div
      className="modal fade"
      id="githubModal"
      tabIndex="-1"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">

          <div className="modal-header">
            <h3 className="modal-title">Mon Profil GitHub</h3>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body d-flex flex-column align-items-center ">

            {user ? (
              <>
                <img
                  src={user.avatar_url}
                  alt="avatar"
                  width="100"
                  className="rounded-circle"
                />

                <p><i className="bi bi-person"></i> {user.name}</p>
                <hr />
                <p><i className="bi bi-geo-alt-fill"></i>  {user.location} </p>
                <hr />
                <i className="bi bi-book"></i> {user.bio}
                <hr />
                <p><i className="bi bi-people-fill"></i> Followers : {user.followers}</p>
                <hr />
                <p><i className="bi bi-people-fill"></i> Following : {user.following}</p>
                <hr />
                <p><i className="bi bi-box"></i> Repositories : {user.public_repos}</p>
                

                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark"
                >
                  Voir le profil
                </a>
              </>
            ) : (
              <p>Chargement...</p>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}

export default GithubModal;