import React, {useState} from 'react';
import {food} from "../../types.ts";
import imageShawurma from "../../assets/images/item_185.jpg"
import imageDolma from "../../assets/images/Без названия.jpeg"
import imageSalad from "../../assets/images/images (1).jpeg"
import imageLagman from "../../assets/images/1-12.jpg"
import imageSomsa from "../../assets/images/tandyrnaya-samsa-v-duxovke_1569242042_17_max.jpg"
import imagePlov from "../../assets/images/img_0066_0.jpg"
import imageTea from "../../assets/images/Без названия (1).jpeg"
import imageCola from "../../assets/images/Без названия (2).jpeg"


const menu: food[] = [
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
            {menu.map( food => (
                <div key={food.name} className="buttons">
                    <button onClick={() => addFood(food.name)}>{food.name} <br/>{food.price} сом <img src={food.image} /></button>
                </div>
            ))}
        </div>
    );
};

export default Buttons;