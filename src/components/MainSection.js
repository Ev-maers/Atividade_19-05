import React from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import VisibleTodoList from "../containers/VisibleTodoList";

const MainSection = ({
  todosCount,
  completedCount,
  pastLength,
  futureLength,
  actions,
}) => (
  <section className="main">
    <div style={{ marginBottom: "1rem" }}>
      <button onClick={actions.undo} disabled={pastLength === 0}>
        Desfazer
      </button>
      <button onClick={actions.redo} disabled={futureLength === 0}>
        Refazer
      </button>
    </div>

    {!!todosCount && (
      <span>
        <input
          className="toggle-all"
          type="checkbox"
          checked={completedCount === todosCount}
          readOnly
        />
        <label onClick={actions.completeAllTodos} />
      </span>
    )}

    <VisibleTodoList />

    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </section>
);

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  pastLength: PropTypes.number.isRequired,
  futureLength: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
};

export default MainSection;
