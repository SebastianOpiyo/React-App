/*
	We use `toLocaleString` to appropriately create currency values for each regions across the world. example:
*/

<p>{props.product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}