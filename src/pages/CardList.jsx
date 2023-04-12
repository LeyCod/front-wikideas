import React from 'react'
import { Card } from '../components/Card';

export const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map((card) => {
                const { id, title, content, views, created } = card;
                const isBigCard = id === 2;
                return (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        content={content}
                        views={views}
                        created={created}
                        isBigCard={isBigCard}
                    />
                );
            })}
        </div>
    )
}
