const ProductItem = (props) => {
  const price = `$${props.price}`;
  return (
    <>
      <h1>{props.title}</h1>

     <form>
        <img src={props.src} />

        <span>{price}</span>
        <button>Add to Cart</button>
        </form>
    </>
  );
};

export default ProductItem;
