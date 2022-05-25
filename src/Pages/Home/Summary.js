import React from "react";

const Summary = () => {
  return (
    <div className="max-w-7xl my-28 mx-auto">
      <div className="text-center mb-10 ">
        <h3 className="text-primary  text-4xl font-bold uppercase">
          Get Info{" "}
        </h3>
        <h4 className="text-1xl my-2">
          {" "}
          Trusted by developers across the world.
        </h4>
      </div>

      <div className="grid md:grid-cols-4 gap-5 px-10 text-center">
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
            <img src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/64/000000/external-compilation-marketing-and-seo-phatplus-lineal-color-phatplus.png"/>
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">100%</p>
          <p className="text-dark mt-2">Completion</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
            <img src="https://img.icons8.com/color/48/000000/delivery--v2.png"/>
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">24/7</p>
          <p className="text-dark mt-2">Delivery</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
            <img src="https://img.icons8.com/external-fauzidea-outline-color-fauzidea/64/000000/external-customer-e-commerce-fauzidea-outline-color-fauzidea.png"/>
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">100+</p>
          <p className="text-dark mt-2">customers</p>
        </div>
        <div className="border py-8 rounded-xl shadow-xl">
          <div className="avatar">
            <div className="w-24 rounded-full">
            <img src="https://img.icons8.com/external-filled-outline-wichaiwi/64/000000/external-transactions-gamefi-filled-outline-wichaiwi.png"/>
            </div>
          </div>

          <p className="text-4xl font-bold text-indigo-600">100K</p>
          <p className="text-dark mt-2">Transactions</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
