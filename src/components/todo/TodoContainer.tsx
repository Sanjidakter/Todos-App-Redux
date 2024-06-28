import React from 'react';
import TodoCard from './TodoCard';
import { Button } from '../ui/button';
import AddTodoModal from './AddTodoModal';
import TodoFilter from './TodoFilter';
import { useAppSelector } from '@/redux/hook';

const TodoContainer = () => {
    const {todos} = useAppSelector((state)=>state.todos);
    return (
        <div>
            <div className='flex justify-between mb-5'>
            <AddTodoModal/>
            <TodoFilter/>
            </div>
            <div className='bg-primary-gradient 500 w-full h-full rounded-xl  space-y-3  p-[5px]'>
                <div className='bg-white p-5 w-full h-full rounded-lg space-y-3'>
                {todos.map(item => <TodoCard/>)}
                </div>
               
               {/* <div className='bg-white text-2xl font-bold p-5 flex justify-items-center'>
                <p>There is no task pending</p>
               </div> */}
            </div>
        </div>
    );
};

export default TodoContainer;