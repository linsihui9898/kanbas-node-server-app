import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  addModule, deleteModule, updateModule, setModule,
  setModules,
} from "./modulesReducer";
import { findModulesForCourse, createModule } from "./client";
import * as client from "./client";
function ModuleList() {
    const handleUpdateModule = async () => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
      };
    
    
    const handleAddModule = () => {
        createModule(courseId, module).then((module) => {
          dispatch(addModule(module));
        });
      };
    
    const handleDeleteModule = (moduleId) => {
        client.deleteModule(moduleId).then((status) => {
          dispatch(deleteModule(moduleId));
        });
      };
    
    
    const { courseId } = useParams();
    useEffect(() => {
      findModulesForCourse(courseId)
        .then((modules) =>
          dispatch(setModules(modules))
      );
    }, [courseId]);
  
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <button
           onClick={handleAddModule}>
            Add
          </button>
          <button
            onClick={() => handleDeleteModule(module._id)}>
            Delete
          </button>
        </li>
      </ul>
    );

}
export default ModuleList;