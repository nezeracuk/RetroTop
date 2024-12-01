import React, { useContext, useState } from 'react';
import { ItemsContext } from '../../../context/itemscontext';
import ViewMoreButton from '../viewButton/viewButton';
import CatalogItem from '../../catalog/catalogItem/catalogitem';
import './games.css';

const NewArrivals = () => {
    const { items } = useContext(ItemsContext);
    const [visibleItems, setVisibleItems] = useState(6);

    const handleViewMore = () => {
        setVisibleItems(prevVisibleItems => prevVisibleItems + 6);
    };

    return (
        <section className="new-arrivals">
            <h2 className="new-arrivals-title">Retro games</h2>
            <div className="games-grid">
                {items.slice(0, visibleItems).map((games) => (
                    <CatalogItem
                        key={games.id}
                        id={games.id}
                        title={games.title}
                        price={games.price}
                        description={games.description}
                        imageUrl={games.imageUrl}
                        size={games.size}
                    />
                ))}
            </div>
            {visibleItems < items.length && (
                <ViewMoreButton onClick={handleViewMore} />
            )}
        </section>
    );
};

export default NewArrivals;