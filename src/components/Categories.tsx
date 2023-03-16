import React, { memo } from 'react'
import { useWhyDidYouUpdate } from 'ahooks'

type CategoriesProps = {
  value: number
  onClickCategory: (i: number) => void
}

const categories = [
  'Все',
  'Мясные',
  'Вегетарианская',
  'Гриль',
  'Острые',
  'Закрытые',
]

const Categories: React.FC<CategoriesProps> = memo(
  ({ value, onClickCategory }) => {
    useWhyDidYouUpdate('Categories', { value, onClickCategory })

    return (
      <div className="categories">
        <ul>
          {categories.map((categoriesName, index) => (
            <li
              key={categoriesName}
              onClick={() => onClickCategory(index)}
              className={value === index ? 'active' : ''}
            >
              {categoriesName}
            </li>
          ))}
        </ul>
      </div>
    )
  }
)

export default Categories
