
import './CardItem.scss';

function CardItem(props) {
    const { children } = props;
    return (
        <>
            <div className='card-item'>
                {children}
            </div>
        </>
    )
}

export default CardItem;