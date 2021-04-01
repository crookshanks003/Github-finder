import React from "react";

function Repo({ repo }) {
    return (
        <div className="card">
            <h3>
                <a href={repo.html_url} target="blank">
                    {repo.name}
                </a>
            </h3>
            {repo.description && <p>{repo.description}</p>}
        </div>
    );
}

export default Repo;
