import React from "react";
import { useState } from "react";
import { upload } from "../api/cloudinary";
import useProducts from "../hooks/useProducts";

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [image, setImage] = useState();
  const [isUploading, setIsUploading] = useState(false);
  const [success, setSuccess] = useState();
  const { addProduct } = useProducts();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setImage(files && files[0]);
      return;
    }
    setProduct((product) => ({ ...product, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    upload(image)
      .then((url) => {
        addProduct.mutate(
          { product, url },
          {
            onSuccess: () => {
              setSuccess("제품 등록 성공!");
              setTimeout(() => {
                setSuccess(null);
              }, 4000);
            },
          }
        );
      })
      .finally(() => setIsUploading(false));
  };

  return (
    <section>
      <h1 className="text-2xl mb-5">새로운 제품 등록</h1>
      {success && <p>✅ {success}</p>}
      <form onSubmit={handleSubmit} className="flex flex-col">
        <img
          src={image && URL.createObjectURL(image)}
          alt={image && image.name}
          className="w-1/2"
        ></img>
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          className="border border-slate-300 p-2 mb-2"
          required
        ></input>
        <input
          name="title"
          type="text"
          value={product.title ?? ""}
          onChange={handleChange}
          placeholder="제품명"
          className="border border-slate-300 p-2 mb-2"
          required
        ></input>
        <input
          name="price"
          type="number"
          value={product.price ?? ""}
          onChange={handleChange}
          placeholder="가격"
          className="border border-slate-300 p-2 mb-2"
          required
        ></input>
        <input
          name="category"
          type="text"
          value={product.category ?? ""}
          onChange={handleChange}
          placeholder="카테고리"
          className="border border-slate-300 p-2 mb-2"
          required
        ></input>
        <input
          name="description"
          type="text"
          value={product.description ?? ""}
          onChange={handleChange}
          placeholder="제품 설명"
          className="border border-slate-300 p-2 mb-2"
          required
        ></input>
        <input
          name="options"
          type="text"
          value={product.options ?? ""}
          onChange={handleChange}
          placeholder="옵션"
          className="border border-slate-300 p-2 mb-2"
          required
        ></input>
        <button
          type="submit"
          disabled={isUploading}
          className="bg-slate-200 p-2 mb-2"
        >
          {isUploading ? "업로드 중..." : "제품 등록하기"}
        </button>
      </form>
    </section>
  );
}
