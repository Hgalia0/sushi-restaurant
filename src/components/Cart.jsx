import React, { useState } from "react";

export default function Cart({ cartItems = [], setCartItems }) {
  const [showInfo, setShowInfo] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price || 0),
    0
  );

  const handleOrder = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.name}, votre commande est confirmée ! 🍣`);
    setCartItems([]); // Clear cart
    setShowInfo(false);
    setFormData({ name: "", phone: "", address: "" });
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Votre Panier</h2>

      {!showInfo ? (
        <>
          {/* 🧾 Cart Items */}
          {cartItems.length === 0 ? (
            <p className="text-gray-500 text-center">Aucun article dans le panier.</p>
          ) : (
            <>
              <div className="flex flex-col gap-3 pb-4 overflow-y-auto max-h-60">
                {cartItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between bg-gray-100 p-2 rounded-lg"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-10 h-10 rounded-lg"
                    />
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm text-gray-600">{item.price}</p>
                  </div>
                ))}
              </div>

              {/* 💰 Total */}
              <div className="flex justify-between font-semibold mt-4 border-t pt-2">
                <span>Total :</span>
                <span>{totalPrice.toFixed(2)} DA</span>
              </div>

              {/* 🟠 Commander Button */}
              <div className="p-4 border-t mt-4">
                <button
                  onClick={() => setShowInfo(true)}
                  className="bg-[#e6d3b4] text-[#797979] font-semibold px-20 py-2 rounded-[12px] shadow-lg hover:bg-[#eae0cf] transition-all duration-300"
                >
                  Commander
                </button>
              </div>
            </>
          )}
        </>
      ) : (
        /* 📝 Info Form */
        <form
          onSubmit={handleOrder}
          className="flex flex-col gap-3 mt-2 flex-1 justify-between"
        >
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold mb-2 text-center">
              Vos informations
            </h3>

            <input
              type="text"
              placeholder="Nom complet"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border p-2 rounded-lg w-full"
            />
            <input
              type="tel"
              placeholder="Numéro de téléphone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border p-2 rounded-lg w-full"
            />
            <textarea
              placeholder="Adresse"
              required
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              className="border p-2 rounded-lg w-full"
            ></textarea>
          </div>

          {/* 🟢 Buttons */}
          <div className="flex gap-2 mt-4">
            <button
              type="submit"
              className="bg-gradient-to-r from-[#efa236] via-[#d49e4d] to-[#6e6c6c]
          text-white font-semibold px-4 py-2 rounded-[12px] shadow-lg
          hover:from-[#dabd94] hover:via-[#e0c08f] hover:to-[#8b8686]
          transition-all duration-300"
            >
              Envoyer la commande
            </button>
            <button
              type="button"
              onClick={() => setShowInfo(false)}
              className="bg-[#e6d3b4] text-[#797979] font-semibold px-6 py-2 rounded-[12px] shadow-lg hover:bg-[#eae0cf] transition-all duration-300"
            >
              Retour
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
