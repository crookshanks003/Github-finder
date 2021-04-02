import React from "react";
import Repo from "./Repo";
import { useContext } from "react";
import GithubContext from "../../../context/github/githubContext";

function Repos() {
    const githubContext = useContext(GithubContext);

    return githubContext.repos.map(repo => <Repo key={repo.id} repo={repo} />);
}

export default Repos;
