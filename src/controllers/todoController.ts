import { RequestHandler } from "express";
import { Todo } from "../models/todos";

const TODOS:Todo[] = [];

export const createTodo:RequestHandler =  (req , res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random.toString(),text);
    TODOS.push(newTodo);

    res.status(201).json({message: 'created a todo',createTodo: newTodo});
  };

  export const getTodos:RequestHandler =  (req , res, next) => {
    res.status(201).json({todos:Todo});
  };

  export const updateTodo:RequestHandler<{id:string}> =  (req , res, next) => {
    const todoId = req.params.id;
    const updatedText = (req.body as {text: string}).text;
    const todoIndex = TODOS.findIndex(todo => todo.id===todoId);

    if(todoIndex>0){
      TODOS[todoIndex] = new Todo(TODOS[todoIndex].id,updatedText);
      res.status(201).json({message: 'created a todo',updateTodo: TODOS[todoIndex]});
    }else{
      throw new Error("Unable to update");
    }

  };

  export const deleteTodo:RequestHandler =  (req , res, next) => {
    const todoId = req.params.id;
  };