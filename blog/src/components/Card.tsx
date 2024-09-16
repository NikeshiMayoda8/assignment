import React from 'react';
import { Card as AntCard } from 'antd';

const { Meta } = AntCard;

type Prop = {
  title?: React.ReactNode;
  extra?: React.ReactNode;
  cover?: React.ReactNode;
  children: React.ReactNode;
  hoverable?: boolean;
  className?: string;
  styles?: {
    title?: string;
    header?: string;
    body?: string;
  };
};

const Card: React.FC<Prop> & { Meta: typeof Meta } = ({
  title,
  extra,
  cover,
  children,
  hoverable,
  className,
  styles
}) => {
  return (
    <AntCard
      title={title}
      extra={extra}
      cover={cover}
      hoverable={hoverable}
      bordered={false}
      className={`h-full w-full ${className ? className : "p-4 sm:p-8"} ${styles?.body}`}
    >
      {children}
    </AntCard>
  );
};

Card.Meta = Meta;

export default Card;
