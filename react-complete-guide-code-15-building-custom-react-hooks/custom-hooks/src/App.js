import React, { useEffect, useState, useCallback } from "react";
import useHttp from "./hooks/use-http";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const transformTask = useCallback((data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }
    setTasks(loadedTasks);
    // return loadedTasks;
  }, []);

  const { error, isLoading, sendRequest: fetchTasks } = useHttp();
  // const fetchTasks = async (taskText) => {
  //   setIsLoading(true);
  //   setError(null);
  //   try {
  //     const response = await fetch(
  //       "https://react-project-cfd32-default-rtdb.europe-west1.firebasedatabase.app/task.json"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Request failed!");
  //     }

  //     const data = await response.json();

  // const loadedTasks = [];

  // for (const taskKey in data) {
  //   loadedTasks.push({ id: taskKey, text: data[taskKey].text });
  // }

  //     setTasks(loadedTasks);
  //   } catch (err) {
  //     setError(err.message || "Something went wrong!");
  //   }
  //   setIsLoading(false);
  // };

  useEffect(() => {
    fetchTasks(
      {
        url: "https://react-project-cfd32-default-rtdb.europe-west1.firebasedatabase.app/task.json",
        method: "GET",
      },
      transformTask
    );
  }, [fetchTasks, transformTask]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
