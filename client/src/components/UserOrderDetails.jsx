export default function UserOrderDetails(){
    return (
        <div className="grid grid-cols-2 space-x-2 space-y-2 w-[800px] h-[600px] backdrop-blur-3xl rounded-4xl p-5">
                <div className="bg-black/85 p-2 backdrop-blur-3xl rounded-3xl ">
                    <h1 className="text-xl font-extrabold text-white text-center"> Order Details</h1>
                    <p className="text-white">
                        Order ID: Unique identifier for the order.
                        Order Date & Time: When the order was placed.
                        Delivery Date & Time: Expected or actual delivery time.
                        Current Status: (e.g., Out for Delivery, Delivered on [date]).
                    </p>
                </div>

                <div className=" bg-black/85 p-2 backdrop-blur-3xl rounded-3xl">
                    <h1 className="text-xl font-extrabold text-white text-center">Product Details</h1>
                    <p className="text-white">
                    Product Name: Name of the purchased item(s).
                    Product Image: A thumbnail of the product.
                    Quantity: Number of items ordered.
                    Price: Price per item and total price.
                    Order Total: Final cost, including taxes & delivery charges.
                    </p>
                </div>

                <div className=" bg-black/85 p-2 backdrop-blur-3xl rounded-3xl">
                    <h1 className="text-xl  font-extrabold text-white text-center">Delivery Information</h1>
                    <p className="text-white">
                        Shipping Address: Where the order is being delivered.
                        Delivery Partner: Name of the courier service (e.g., FedEx, DHL, Amazon Delivery).
                        Tracking Number: If available, with a clickable link to track the package.
                        Estimated Delivery Time: A progress bar or countdown timer (if not delivered yet).
                    </p>
                </div>

                <div className=" bg-black/85 p-2 backdrop-blur-3xl rounded-3xl">
                    <h1 className="text-xl font-extrabold text-white text-center">Payment Information</h1>
                    <p className="text-white">
                        Payment Information
                        Payment Method: (e.g., Credit Card, PayPal, Cash on Delivery).
                        Transaction ID: If paid online.
                        Billing Address: If different from the shipping address.
                    </p>
                </div>

        </div>
    )
}