import React, { useRef, useState } from 'react';
import { Button, Input } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { nanoid } from '@reduxjs/toolkit';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { addCard, ICard, selectListCardItems } from '../../../../store/slices/card.slice';
import { removeList, selectListItem } from '../../../../store/slices/list.slice';
import CardItem from '../CardItem';

import './ListItem.scss';

interface IProps {
  id: string;
}

const ListItem = ({ id }: IProps) => {
  const [isShowAdd, setIsShowAdd] = useState(false);
  const addCardInputRef = useRef<HTMLInputElement>(null);
  const listi = useAppSelector(selectListItem(id));
  const cards = useAppSelector(selectListCardItems(id));
  const dispatch = useAppDispatch();

  const handleCreateCard = () => {
    const newCard: ICard = {
      id: nanoid(),
      name: addCardInputRef.current?.input.value,
      listId: id,
    };
    dispatch(addCard(newCard));
  };

  const handleRemove = () => {
    dispatch(removeList(id));
  };

  return (
    <div className="ListItem">
      <h3 className="ListItem--title">
        <span>{listi.name}</span>
        <Button type="ghost" size="small" onClick={handleRemove} icon={<CloseOutlined />} />
      </h3>
      <div className="ListItem--cards">
        {cards.map((c) => (
          <div className="ListItem--cards__item">
            <CardItem id={c.id} />
          </div>
        ))}
      </div>
      {isShowAdd && (
        <div className="ListItem--add-card">
          <Input ref={addCardInputRef} type="text" />
          <Button onClick={handleCreateCard}>Save</Button>
          <Button icon={<CloseOutlined />} onClick={() => setIsShowAdd(false)} />
        </div>
      )}
      <Button onClick={() => setIsShowAdd(true)}>Add another card</Button>
    </div>
  );
};

export default ListItem;
