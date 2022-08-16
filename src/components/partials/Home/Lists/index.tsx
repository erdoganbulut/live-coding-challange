import React, { useRef } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Button, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addList, IList, selectLists } from '../../../../store/slices/list.slice';
import ListItem from '../ListItem';

import './Lists.scss';

const Lists = () => {
  const addListInputRef = useRef<HTMLInputElement>(null);
  const lists = useAppSelector(selectLists);
  const dispatch = useAppDispatch();

  const handleCreateList = () => {
    const newList: IList = {
      id: nanoid(),
      name: addListInputRef.current?.input.value,
    };
    dispatch(addList(newList));
  };

  return (
    <div className="Lists">
      <div className="Lists--columns">
        {lists.map((l) => (
          <div className="Lists--columns__item">
            <ListItem key={l.id} id={l.id} />
          </div>
        ))}
        <div className="Lists--columns__item is-action">
          <Input ref={addListInputRef} type="text" />
          <Button onClick={handleCreateList}>Add a list</Button>
        </div>
      </div>
    </div>
  );
};

export default Lists;
