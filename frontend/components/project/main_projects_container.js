import MainProjects from './main_projects';
import { connect } from 'react-redux';
import { requestProjects,
         requestProject } from '../../actions/projects_actions';
// import { requestTasks } from '../../actions/tasks_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  projects: state.projects
  // tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  requestProjects: () => dispatch(requestProjects()),
  requestProject: id => dispatch(requestProject(id))
  // requestTasks: () => dispatch(requestTasks())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainProjects);