"use client";

import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  size: string;
  image: string;
  price: number;
  mrp: number;
  discountPercent: number;
  deliveryDate: string;
  quantity: number;
}

interface FeaturedItem {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
}

// Swap this out with real cart data / state once you wire up logic.
const cartItems: CartItem[] = [
  {
    id: "1",
    name: "Hydrating Moisturiser 60 ml for Face & Body, Normal & Dry Skin",
    size: "60 g (Pack of 1)",
    image: "/products/moisturiser.png",
    price: 338,
    mrp: 399,
    discountPercent: 15,
    deliveryDate: "Sun, 21 Jun",
    quantity: 1,
  },
];

const featuredItems: FeaturedItem[] = [
  {
    id: "f1",
    name: "Choco Vanilla Lip Balm – 8 gm",
    image: "/products/lip-balm.png",
    rating: 4,
    reviewCount: 15,
    priceRange: "₹189.00 – ₹329.00",
  },
];

function subtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export default function CartPage(): JSX.Element {
  const total = subtotal(cartItems);

  return (
    <div className="page">
      <div className="layout">
        <main className="cartColumn">
          <div className="cartHeader">
            <h1>Shopping Cart</h1>
            <a href="#" className="deselectLink">
              Deselect all items
            </a>
          </div>

          <div className="priceLabel">Price</div>
          <div className="divider" />

          {cartItems.map((item) => (
            <div key={item.id} className="cartItem">
              <input type="checkbox" defaultChecked className="checkbox" />

              <div className="itemImage">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={140}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="itemDetails">
                <p className="itemName">{item.name}</p>
                <p className="inStock">In stock</p>
                <p className="delivery">
                  FREE delivery <strong>{item.deliveryDate}</strong>
                </p>
                <span className="fulfilledBadge">Fulfilled</span>
                <p className="size">
                  <strong>Size:</strong> {item.size}
                </p>

                <div className="itemActions">
                  <div className="qtyStepper">
                    <button type="button" aria-label="Decrease quantity">
                      –
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" aria-label="Increase quantity">
                      +
                    </button>
                  </div>
                  <a href="#">Delete</a>
                  <a href="#">Save for later</a>
                  <a href="#">See more like this</a>
                  <a href="#">Share</a>
                </div>
              </div>

              <div className="itemPrice">
                <span className="discount">-{item.discountPercent}%</span>
                <span className="price">₹{item.price.toFixed(2)}</span>
                <span className="mrp">M.R.P: ₹{item.mrp.toFixed(2)}</span>
              </div>
            </div>
          ))}

          <div className="divider" />
          <div className="subtotalRow">
            Subtotal ({cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
            ): <strong>₹{total.toFixed(2)}</strong>
          </div>

          <section className="yourItems">
            <h2>Your Items</h2>
            <div className="tabs">
              <span className="tab">No items saved for later</span>
              <span className="tab activeTab">Buy it again</span>
            </div>
            <div className="emptyBox">No items</div>
          </section>

          <p className="disclaimer">
            The price and availability of items are subject to change. The
            shopping cart is a temporary place to store a list of your items.
          </p>
        </main>

        <aside className="sideColumn">
          <div className="subtotalCard">
            <p className="subtotalCardText">
              Subtotal ({cartItems.length} item
              {cartItems.length !== 1 ? "s" : ""}): ₹{total.toFixed(2)}
            </p>
            <label className="giftCheckbox">
              <input type="checkbox" /> This order contains a gift
            </label>
            <button type="button" className="proceedButton">
              Proceed to Buy
            </button>
          </div>

          <div className="promoBanner">
            <p>
              Hurry! <strong>Limited Period Offer</strong> – get a discount on
              your next purchase!
            </p>
            <p>FREE delivery, offers and multiple benefits in one plan.</p>
            <button type="button" className="promoButton">
              Join Now
            </button>
          </div>

          <div className="featuredCard">
            <h3>Featured items you may like</h3>
            {featuredItems.map((item) => (
              <div key={item.id} className="featuredItem">
                <div className="featuredImage">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64}
                    height={64}
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <p className="featuredName">{item.name}</p>
                  <p className="featuredRating">
                    {"★".repeat(item.rating)}
                    {"☆".repeat(5 - item.rating)} ({item.reviewCount})
                  </p>
                  <p className="featuredPrice">{item.priceRange}</p>
                  <button type="button" className="optionsButton">
                    See all buying options
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <style jsx>{`
        .page {
          background-color: #eaeded;
          padding: 24px;
          font-family: Arial, sans-serif;
          color: #0f1111;
        }

        .layout {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: 16px;
          align-items: start;
        }

        .cartColumn,
        .sideColumn > div {
          background-color: #fff;
          border-radius: 8px;
          padding: 20px 24px;
        }

        .sideColumn {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .cartHeader {
          display: flex;
          align-items: baseline;
          gap: 16px;
          margin-bottom: 4px;
        }

        .cartHeader h1 {
          font-size: 28px;
          font-weight: 500;
          margin: 0;
        }

        .deselectLink {
          color: #007185;
          text-decoration: none;
          font-size: 13px;
        }

        .priceLabel {
          text-align: right;
          color: #565959;
          font-size: 13px;
          margin-bottom: 4px;
        }

        .divider {
          border-top: 1px solid #ddd;
          margin: 12px 0;
        }

        .cartItem {
          display: grid;
          grid-template-columns: auto 130px 1fr auto;
          gap: 16px;
          padding: 16px 0;
          align-items: start;
        }

        .checkbox {
          margin-top: 6px;
        }

        .itemImage {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .itemName {
          font-size: 16px;
          margin: 0 0 4px;
        }

        .inStock {
          color: #007600;
          font-size: 13px;
          margin: 0 0 4px;
        }

        .delivery {
          font-size: 13px;
          margin: 0 0 4px;
        }

        .fulfilledBadge {
          display: inline-block;
          background-color: #f0f2f2;
          border: 1px solid #d5d9d9;
          font-size: 11px;
          padding: 1px 6px;
          border-radius: 3px;
          margin-bottom: 8px;
        }

        .size {
          font-size: 13px;
          margin: 0 0 12px;
        }

        .itemActions {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: wrap;
          font-size: 13px;
        }

        .itemActions a {
          color: #007185;
          text-decoration: none;
        }

        .qtyStepper {
          display: flex;
          align-items: center;
          border: 1px solid #d5d9d9;
          border-radius: 16px;
          overflow: hidden;
        }

        .qtyStepper button {
          width: 28px;
          height: 28px;
          border: none;
          background-color: #f0f2f2;
          cursor: pointer;
          font-size: 14px;
        }

        .qtyStepper span {
          width: 28px;
          text-align: center;
          font-size: 13px;
        }

        .itemPrice {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }

        .discount {
          color: #cc0c39;
          font-size: 18px;
        }

        .price {
          font-size: 20px;
        }

        .mrp {
          color: #565959;
          font-size: 12px;
          text-decoration: line-through;
        }

        .subtotalRow {
          text-align: right;
          font-size: 16px;
          margin-bottom: 24px;
        }

        .yourItems h2 {
          font-size: 22px;
          font-weight: 500;
          margin-bottom: 12px;
        }

        .tabs {
          display: flex;
          gap: 24px;
          border-bottom: 1px solid #ddd;
          margin-bottom: 16px;
          font-size: 14px;
        }

        .tab {
          padding-bottom: 8px;
          color: #565959;
        }

        .activeTab {
          color: #007185;
          border-bottom: 2px solid #007185;
          font-weight: 600;
        }

        .emptyBox {
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 16px;
          color: #565959;
          font-size: 14px;
        }

        .disclaimer {
          color: #565959;
          font-size: 12px;
          margin-top: 24px;
        }

        .subtotalCardText {
          font-size: 18px;
          margin: 0 0 12px;
        }

        .giftCheckbox {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          margin-bottom: 16px;
        }

        .proceedButton {
          width: 100%;
          background-color: #ffd814;
          border: 1px solid #fcd200;
          border-radius: 8px;
          padding: 10px 0;
          font-size: 14px;
          cursor: pointer;
        }

        .proceedButton:hover {
          background-color: #f7ca00;
        }

        .promoBanner {
          background-color: #232f3e;
          color: #fff;
          border-radius: 8px;
          padding: 20px;
        }

        .promoBanner p {
          font-size: 14px;
          margin: 0 0 10px;
        }

        .promoButton {
          width: 100%;
          background-color: #ffd814;
          border: none;
          border-radius: 8px;
          padding: 10px 0;
          font-size: 14px;
          cursor: pointer;
          margin-top: 8px;
        }

        .featuredCard h3 {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 16px;
        }

        .featuredItem {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 12px;
        }

        .featuredImage {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .featuredName {
          font-size: 13px;
          margin: 0 0 4px;
          color: #007185;
        }

        .featuredRating {
          font-size: 12px;
          color: #f5a623;
          margin: 0 0 4px;
        }

        .featuredPrice {
          font-size: 13px;
          margin: 0 0 8px;
        }

        .optionsButton {
          width: 100%;
          background-color: #f0f2f2;
          border: 1px solid #d5d9d9;
          border-radius: 16px;
          padding: 6px 0;
          font-size: 12px;
          cursor: pointer;
        }

        @media (max-width: 900px) {
          .layout {
            grid-template-columns: 1fr;
          }

          .cartItem {
            grid-template-columns: auto 1fr;
          }

          .itemPrice {
            grid-column: 1 / -1;
            align-items: flex-start;
            text-align: left;
            margin-top: 8px;
          }
        }
      `}</style>
    </div>
  );
}