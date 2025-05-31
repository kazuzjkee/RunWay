import React from 'react';
import CategoryCard from './CategoryCard';

const CategorySection = () => {
    return (
        <div className="categories">
            <CategoryCard title="Мужчинам" image="https://img.freepik.com/free-photo/young-fashionable-businessman_158595-4710.jpg?semt=ais_hybrid&w=740" link="/men"/>
            <CategoryCard title="Женщинам" image="https://peopletalk.ru/wp-content/uploads/2019/02/emily-1.jpg" link="/women"/>
            <CategoryCard title="Детям" image="https://img.freepik.com/free-photo/child-summer-park-boy-white-t-shirt-kid-with-skate_1157-42006.jpg?semt=ais_hybrid&w=740" link="/kids"/>
        </div>
    )
}

export default CategorySection