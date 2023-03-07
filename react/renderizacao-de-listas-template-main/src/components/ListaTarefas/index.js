import { useState } from "react";
import {
  InputContainer,
  ListaContainer,
  ListaTarefasContainer,
  Tarefa,
  TaskInput,
  AddTaskButton,
  RemoveButton,
} from "./styled";
import bin from "../../assets/bin.png";

export function ListaTarefas() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [lista , setLista] = useState(["Estudar", "Jantar" , "Dormir"]);


  const onChangeTarefa = (event) => {
    setNovaTarefa(event.target.value);
  };

  const adicionaTarefa = () => {
    if(novaTarefa != ""){
      const novaLista = [...lista, novaTarefa]
      setLista(novaLista);
      setNovaTarefa("");
    }else{
      alert("Digite uma tarefa!");
    }
  };

  const removeTarefa = (indexARemover) => {
    const novaLista = lista.filter((tarefa,index)=>{
      return index != indexARemover;
    });
    setLista(novaLista)
  };

  const tarefas = lista.map((tarefa,index) =>{
    return (
      <Tarefa key={index}>
        <p>{tarefa}</p>
        <RemoveButton onClick={()=>removeTarefa(index)}>
        <img src={bin} alt="" width="16px" />
        </RemoveButton>
      </Tarefa>
  )});

  return (
    <ListaTarefasContainer>
      <InputContainer>
        <TaskInput
          placeholder="Digite aqui uma tarefa"
          value={novaTarefa}
          onChange={onChangeTarefa}
        />
        <AddTaskButton onClick={adicionaTarefa}>Adicionar</AddTaskButton>
      </InputContainer>

      <ListaContainer>
        <ul>
          {tarefas}
        </ul>
      </ListaContainer>
    </ListaTarefasContainer>
  );
}
