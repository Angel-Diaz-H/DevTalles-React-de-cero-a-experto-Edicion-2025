// Es una función que debe regresar un estado nuevo o valor.
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  todos: Todo[];
  length: number;
  completed: number;
  pending: number;
}

export type TaskAction =
  | { type: 'ADD_TODO'; payload: string }
  | { type: 'TOGGLE_TODO'; payload: string }
  | { type: 'DELETE_TODO'; payload: string };

// Siempre retorna algo de tipo TaskState.
export const taskReducer = (
  state: TaskState,
  action: TaskAction,
): TaskState => {
  return state;
};
