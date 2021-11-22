import React, {useEffect} from 'react';
import NavBar from '.././components/NavBar.jsx';
import {updateDashboardActionCreator} from '../actions/actions';
import {useDispatch, useSelector} from 'react-redux';


function Dashboard() {
    const dispatch = useDispatch();
    const authState = useSelector(state => state.auth);
    const projectState = useSelector(state => state.projects);
    // console.log(authState)

    //when dashboard loads, we want to make a get request to get all projects associated 
    //with that user
    useEffect(() => {
        dispatch(updateDashboardActionCreator())
    }, [projectState.projectsLoaded])

    // console.log(projectState.projectList)

    return(
    <div>
        <button>Create Project</button>
        <div>
            {projectState.projectsLoaded === false && <p>Loading...</p>}
            {projectState.projectsLoaded === true && projectState.projectList.length === 0 && <h1>No projects yet</h1> }
            {projectState.projectsLoaded === true && projectState.projectList.length > 0 && <h1>Projects!</h1> }
            {/* Projects go here */}
         </div>
    </div>
    )
  
}

export default Dashboard