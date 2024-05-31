
import './style/module.css'; 

function ProductButton() {
    const [isClicked, setIsClicked] = useState(false); 
    const handleClick = () => {
        setIsClicked(true); 
    };

    return (
        <button
            className={`button product__button ${isClicked ? 'button--clicked' : ''}`} 
            onClick={handleClick}
            aria-label="Add to cart"
        >
            <svg className="button__icon" width="20" height="20">
                <use href="#cart"></use>
            </svg>
        </button>
    );
}

export default ProductButton;