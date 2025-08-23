import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, updateProduct, deleteProduct } from "../Slice/crudSlice";
import {
  addNewProductToFilter,
  updateProductInFilter,
} from "../Slice/fruitSlice";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";

export default function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    img: "",
    discount: "",
    name: "",
    rating: "",
    price: "",
    lastprice: "",
    status: "",
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, img: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!form.name || !form.img) {
      toast.error("Please provide product name and image!");
      return;
    }

    const newItem = {
      _id: Date.now(),
      img: form.img,
      discount: form.discount,
      name: form.name,
      rating: Number(form.rating),
      price: form.price,
      lastprice: form.lastprice,
      status: form.status,
    };

    dispatch(addProduct(newItem));
    dispatch(addNewProductToFilter(newItem));
    toast.success("Product added successfully");

    setForm({
      img: "",
      discount: "",
      name: "",
      rating: "",
      price: "",
      lastprice: "",
      status: "",
    });
  };

  const handleUpdate = (item) => {
    setForm({
      img: item.img,
      discount: item.discount,
      name: item.name,
      rating: item.rating,
      price: item.price,
      lastprice: item.lastprice,
      status: item.status,
    });
    setEditingId(item._id);
  };

  const handleSave = () => {
    dispatch(updateProduct({ _id: editingId, updatedData: { ...form } }));
    dispatch(
      updateProductInFilter({ _id: editingId, updatedData: { ...form } })
    );
    toast.success("Product updated");

    setEditingId(null);
    setForm({
      img: "",
      discount: "",
      name: "",
      rating: "",
      price: "",
      lastprice: "",
      status: "",
    });
  };

  const handleDelete = (_id) => {
    dispatch(deleteProduct(_id));
    toast.success("Product deleted");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="bg-gray-100 p-6 rounded-2xl shadow mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">

        <Button
          variant="outlined"
          component="label"
          className="flex items-center justify-center"
        >
          Upload Image
          <input type="file" hidden accept="image/*" onChange={handleImageUpload} />
        </Button>

        {form.img && (
          <img
            src={form.img}
            alt="preview"
            className="w-24 h-24 object-cover rounded-xl border"
          />
        )}

        <TextField
          label="Discount"
          value={form.discount}
          onChange={(e) => setForm({ ...form, discount: e.target.value })}
        />
        <TextField
          label="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <TextField
          label="Rating"
          type="number"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />
        <TextField
          label="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <TextField
          label="Last Price"
          value={form.lastprice}
          onChange={(e) => setForm({ ...form, lastprice: e.target.value })}
        />
        <TextField
          label="Status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        />

        {editingId ? (
          <Button variant="contained" onClick={handleSave} className="mt-4">
            Save
          </Button>
        ) : (
          <Button variant="contained" onClick={handleAdd} className="mt-4">
            Add Product
          </Button>
        )}
      </div>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {products.map((item) => (
          <div
            key={item._id}
            className="border rounded-2xl p-4 shadow hover:shadow-md transition"
          >
            <img
              src={item.img}
              alt={item.name}
              className="rounded-xl mb-3 w-full h-40 object-cover"
            />
            <p className="text-sm text-red-500 font-semibold">{item.discount}</p>
            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-sm">Rating: {item.rating}</p>
            <p className="text-sm">Price: {item.price}</p>
            <p className="text-sm mb-2 line-through">{item.lastprice}</p>
            <div className="flex justify-between items-center">
              <Button size="small" onClick={() => handleUpdate(item)}>
                Update
              </Button>
              <Button size="small" onClick={() => handleDelete(item._id)}>
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
