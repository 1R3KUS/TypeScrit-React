import React, { FunctionComponent } from 'react';
import { ITodo } from '../interfaces';

type AllTasksProps = {
  todos: ITodo[];
  onRemove(id: number): void;
  onToggle(id: number): void;
};

const AllTasks: FunctionComponent<AllTasksProps> = ({ todos, onRemove, onToggle }) => {
  return (
    <div className="AllTasks">
      {todos.length ? (
        todos.map(({ title, id, completed }) => (
          <div key={id} className={`Task ${completed && 'active'}`}>
            <div onClick={() => onToggle(id)} className="Task__check-btn">
              <i>
                <svg
                  width="11"
                  height="8"
                  viewBox="0 0 11 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                    stroke="#B2B2B2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </i>
            </div>
            <h3 className="Task__title">{title}</h3>
            <div onClick={() => onRemove(id)} className="Task__delete-btn">
              <i>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15 8C15.5523 8 16 8.44772 16 9V15C16 16.6569 14.6569 18 13 18H7C5.34315 18 4 16.6569 4 15V9C4 8.44772 4.44772 8 5 8H15ZM14 10H6V15C6 15.5523 6.44772 16 7 16H13C13.5523 16 14 15.5523 14 15V10ZM7 3C7 2.44772 7.44772 2 8 2H12C12.5523 2 13 2.44772 13 3V4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4H7V3Z"
                    fill="#B2B2B2"
                  />
                </svg>
              </i>
            </div>
          </div>
        ))
      ) : (
        <h3 className="Task__title no-todos">Задачи отсутствуют</h3>
      )}
    </div>
  );
};

export default AllTasks;
