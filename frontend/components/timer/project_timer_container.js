import ProjectTimer from './project_timer';
import { connect } from 'react-redux';
import { createTask } from '../../actions/tasks_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  projects: state.projects,
  errors: state.tasks.errors
});

const mapDispatchToProps = dispatch => ({
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectTimer);
