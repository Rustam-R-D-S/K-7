import React, {useState} from 'react';
import {menuItem, Food} from "../../types.ts";
import imageShawurma from "../../assets/images/item_185.jpg"
import imageDolma from "../../assets/images/Без названия.jpeg"
import imageSalad from "../../assets/images/images (1).jpeg"
import imageLagman from "../../assets/images/1-12.jpg"
import imageSomsa from "../../assets/images/tandyrnaya-samsa-v-duxovke_1569242042_17_max.jpg"
import imagePlov from "../../assets/images/img_0066_0.jpg"
import imageTea from "../../assets/images/Без названия (1).jpeg"
import imageCola from "../../assets/images/Без названия (2).jpeg"


 export const menu: menuItem[] = [
    { name: 'Shawurma', price:220, image:imageShawurma},
    { name: 'Dolma', price: 300, image: imageDolma},
    { name: 'Salad', price: 120, image:imageSalad},
    { name: 'Lagman', price: 270, image: imageLagman},
    { name: 'Somsa', price: 65, image: imageSomsa},
    { name: 'Plov', price: 500, image: imagePlov},
    { name: 'Tea', price: 20, image: imageTea},
    { name: 'Cola', price: 50, image:imageCola}
];


const Buttons = () => {
    const [foods, setFoods] = useState<Food[]>([
        { name: 'Shawurma', count: 0, price: 0 },
        { name: 'Dolma', count: 0, price: 0 },
        { name: 'Salad', count: 0, price: 0 },
        { name: 'Lagman', count: 0, price: 0},
        { name: 'Somsa', count: 0, price: 0},
        { name: 'Plov', count: 0, price: 0 },
        { name: 'Tea', count: 0, price: 0 },
        { name: 'Cola', count: 0, price: 0 }
    ]);

    const addFood = (name: string) => {
        const foodToAdd = menu.find(item => item.name === name);
        if (foodToAdd) {
            setFoods(prevFood =>
                prevFood.map(food =>
                    food.name === name ? { ...food, count: food.count + 1, price: food.price + foodToAdd.price } : food
                )
            );
        }
    }

    const removeFood = (name: string) => {
        const foodToAdd = menu.find(item => item.name === name);
        if (foodToAdd) {
            setFoods(prevFoods =>
                prevFoods.map(food =>
                    food.name === name ? { ...food, count: Math.max(food.count - 1, 0), price: Math.max(food.price - foodToAdd.price, 0) } : food
                )
            );
        }
    }

    const getTotalPrice = () => {
        return foods.reduce((acc, food) => acc + (food.price), 0);
    }


    return (
        <div className="container">
            <div className="leftSide">
                {foods.every(food => food.count == 0) ? (

                    <div className="text-empty"><p>Order list is Empty!</p></div>
                ) : (
                    foods.map(food => (
                        food.count > 0 &&
                        <div key={food.name}>
                            <div>{food.name} x{food.count} - {food.price} KGS</div>
                            <button className="xbtn" onClick={() => removeFood(food.name)}>X</button>

                        </div>
                    ))
                )}
                <div className="count">
                   Total price:{getTotalPrice()} KGS
                </div>
            </div>
            <div className="rightSide">
                {menu.map(food => (
                    <div key={food.name} className="buttons">
                        <button onClick={() => addFood(food.name)}>{food.name} <br/>{food.price} KGS <img src={food.image}/>
                        </button>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default Buttons;