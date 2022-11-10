import './rating.css'

export const Rating = ({value}) => <>
    <span className="stars bg-seconday bg-opacity-10">
        {
            [1,2,3,4,5].map(x => (<i key={x} className={(x >+value ? 'empty-star' : 'full-star')}></i>))
        }
    </span>
</>