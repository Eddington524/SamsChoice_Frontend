import React, { useEffect, useState } from 'react';
import { API_URL, getItems } from '@api';
import { Link } from 'framework7-react';
import { Item } from '@constants';

const Items = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await getItems({ q: { s: ['name asc'] } });
            setItems(data);
        })();
    }, []);

    return (
        <div className="mt-3 grid grid-cols-2 gap-1">
            {items.map((item: Item, i) => (
                <div key={item.id}>{
                    items.length ? (
                        <Link href={`/items/${item.id}`} key={item.id} className="flex flex-col">
                            <img src={item.image[0]} alt="#" className="mt-3 w-40 h-40 rounded-lg shadow-sm" />
                            <p className="text-black-500 mt-1">
                                {item.name}
                            </p>
                            <p className="text-black-500 mt-1">
                                {Number(item.price)}원
                            </p>
                        </Link>
                    ) : (
                        <Link href="#" className="bg-white h-20" key={i}>
                            <span className="text-gray-500 mt-1">
                            </span>
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default React.memo(Items);