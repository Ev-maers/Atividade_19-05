import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { getCompletedTodoCount } from "../selectors";

const mapStateToProps = (state) => ({
  todosCount: state.todos.present.length,
  completedCount: getCompletedTodoCount(state),
  pastLength: state.todos.past.length,
  futureLength: state.todos.future.length,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
