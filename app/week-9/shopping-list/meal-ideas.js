"use client"
import { useState, useEffect } from "react";
export default function MealIdea({ingredient}) 
{
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        loadMealIdeas()
    },[ingredient])
    async function loadMealIdeas() 
    {
        
        const onlineMeals = await fetchMealIdeas(ingredient);
        
        setMeals(onlineMeals);
    }
    return (
        <div>
            {meals?.map((meal,i) => {
                return(
                <div key= {i}>{meal.strMeal}</div>
                )
            })};
        </div>
    )
}

async function fetchMealIdeas(ingredient) 
{
    //Put link to data in fetch:
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        

        const data = await response.json();
        console.log(data);

        return data.meals;
    } catch (error) {
        console.log(error)
    }

}