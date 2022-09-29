import React, { useState } from "react";

import { newItem } from "../../services/AdminService";

export default function ProductForm() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [imag, setImag] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = {
      name: name,
      description: desc,
      img: imag,
      price: price,
      stock: stock,
    };
    newItem(item);
  };

  return (
    <section
      style={{ maxHeight: "550px" }}
      className="mx-1 my-4 row overflow-hidden justify-content-center"
    >
      <div className="col-6">
        <img alt="" src="../../imgs/manifiesto-2.jpg" className="img-fluid" />
      </div>
      <form className="col-auto bg-secondary" onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-start justify-content-center mx-3 mt-2">
          <div className="form-group col mb-0 mt-2">
            <h2 className="ml-3 text-white">Ingrese el producto</h2>
            <label htmlFor="inputNombre" className="col-form-label text-white">
              Nombre
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="inputNombre"
                name="title"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col mb-0">
            <label htmlFor="inputNombre" className="col-form-label text-white">
              Descripción
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="inputdescripcion"
                name="description"
                onChange={(e) => setDesc(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col mb-0">
            <label htmlFor="inputUrl" className="col-form-label text-white">
              Foto URL
            </label>
            <div>
              <input
                type="text"
                className="form-control"
                id="inputUrl"
                name="url"
                onChange={(e) => setImag(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col mb-0">
            <label htmlFor="inputPrecio" className="col-form-label text-white">
              Precio
            </label>
            <div>
              <input
                type="number"
                className="form-control"
                id="inputPrecio"
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col mb-2">
            <label htmlFor="inputStock" className="col-form-label text-white">
              Stock
            </label>
            <div>
              <input
                type="number"
                className="form-control"
                id="inputStock"
                name="stock"
                onChange={(e) => setStock(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group col al">
            <div className="form-group col">
              <div>
                <input
                  type="submit"
                  className="btn btn-success"
                  value="Add Item"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
