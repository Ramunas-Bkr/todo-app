import React, { useState } from "react";
import List from "../List/List";
import { Input } from "../../../assets/input/Input";
import Button from "../../../assets/button/Button";
import closeSvg from '../../../assets/images/times-circle-solid.svg'

import "./AddButtonList.scss";
import Badge from "../../Badge/Badge";


const AddButtonList = ({ colors }) => {

  const [visiblePopup, setVisiblePopup] = useState(false);
  const [selectColor, setSelectColor] = useState(colors[0].id);

  return (
    <div className="addList">
      <List
        onClick={() => setVisiblePopup(!visiblePopup)}
        items={[
          {
            className: "list__addButton",
            icon: (
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                className="svg-inline--fa fa-plus fa-w-14"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="black"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
            ),
            name: "Add task",
            active: false,
          },
        ]}
      />

      {visiblePopup && <div className="addList__popup">
        <img
          onClick={() => setVisiblePopup(false)}
          src={closeSvg}
          className="addList__popup-close-btn"
          alt="close button" />
        <Input placeholderName="Task name" />
        <div className="addList__popup-colors ">
          <ul>
            <li>
              {
                colors.map(color => (
                  <Badge
                    onClick={() => setSelectColor(color.id)}
                    key={color.id}
                    color={color.name} 
                    className={selectColor === color.id && 'active'}
                    />
                ))
              }
            </li>
          </ul>
        </div>
        <Button buttonName="Add" />
      </div>}
    </div>
  );
};

export default AddButtonList;
