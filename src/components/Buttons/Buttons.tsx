import React, {useState} from 'react';
import {food} from "../../types.ts";



const menu: food[] = [
    { name: 'Shawurma', price:220},
    { name: 'Dolma', price: 300 },
    { name: 'Salad', price: 120},
    { name: 'Lagman', price: 270},
    { name: 'Somsa', price: 65},
    { name: 'Plov', price: 500},
    { name: 'Tea', price: 20},
    { name: 'Cola', price: 50,}
];



const Buttons = () => {
    const [food, setFood] = useState([
        { name: 'Shawurma', count: 0 },
        { name: 'Dolma', count: 0 },
        { name: 'Salad', count: 0 },
        { name: 'Lagman', count: 0 },
        { name: 'Somsa', count: 0 },
        { name: 'Plov', count: 0 },
        { name: 'Tea', count: 0 },
        { name: 'Cola', count: 0 }
    ]);

    const addFood = (name:string) => {
        setFood(prevFood =>
            prevFood.map(food =>
                food.name === name ? { ...food, count: food.count + 1 } : food
            )
        );
    }
    console.log(food)
    return (
        <div>
            {menu.map( food=> (
                <div key={food.name} className="buttons">
                    <button onClick={() => addFood(food.name)}>Add {food.name}</button>
                </div>
            ))}
        </div>
    );
};

export default Buttons;