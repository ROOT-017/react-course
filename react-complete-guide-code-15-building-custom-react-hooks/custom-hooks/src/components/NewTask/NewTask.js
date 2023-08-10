// import { useState } from "react";
import useHttp from "../../hooks/use-http";
import Section from "../UI/Section";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  const { error, isLoading, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText, tasksData) => {
    const generatedId = tasksData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    props.onAddTask(createdTask);
  };
  const enterTaskHandler = async (taskText) => {
    // setIsLoading(true);
    // setError(null);
    sendTaskRequest(
      {
        method: "POST",
        body: { text: taskText },
        url: "https://react-project-cfd32-default-rtdb.europe-west1.firebasedatabase.app/task.json",
      },
      createTask.bind(null, taskText)
    );

    //   try {
    //     const response = await fetch(
    //       "https://react-project-cfd32-default-rtdb.europe-west1.firebasedatabase.app/task.json",
    //       {
    //         method: "POST",
    //         body: JSON.stringify({ text: taskText }),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     );

    //     if (!response.ok) {
    //       throw new Error("Request failed!");
    //     }

    //     const data = await response.json();

    // const generatedId = data.name; // firebase-specific => "name" contains generated id
    // const createdTask = { id: generatedId, text: taskText };

    // props.onAddTask(createdTask);
    //   } catch (err) {
    //     setError(err.message || "Something went wrong!");
    //   }
    //   setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
