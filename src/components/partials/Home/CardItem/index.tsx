import React from 'react';
import { Card } from 'antd';
import { useAppSelector } from '../../../../store/hooks';
import { selectCardItem } from '../../../../store/slices/card.slice';

interface IProps {
  id: string;
}

const CardItem = ({ id }: IProps) => {
  const card = useAppSelector(selectCardItem(id));

  return <Card title={card?.name} />;
};

export default CardItem;
