import { useState, useEffect } from 'react';


function App() {
  const [input, setInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskStorage = localStorage.getItem('@task');
    if (taskStorage) { 
      setTasks(JSON.parse(taskStorage));
    }
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('@task', JSON.stringify(tasks));
    }
  }, [tasks]);


  function handleRegister(e) {
    e.preventDefault();

    setTasks([...tasks, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando Tarefas</h1>
      <form onSubmit={handleRegister}>
        <label>Tarefas para hoje</label><br />
        <input placeholder='Informe uma tarefa' value={input} onChange={(e) => setInput(e.target.value)} /><br />

        <button type='submit'>Registrar</button>
      </form>


      <hr />

      <ul>
        {tasks.map((tasks, index) => (
          <li key={index}>{tasks}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
