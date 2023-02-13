import React from "react";
import { useState } from "react";
import { upload } from "../api/cloudinary";
import Button from "../components/ui/Button";
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
    <section className="w-full text-center">
      <h1 className="text-2xl my-4 font-semibold">새로운 메뉴 등록</h1>
      {success && <p className="my-2">✅ {success}</p>}
      <img
        src={image && URL.createObjectURL(image)}
        alt={image && image.name}
        className="w-1/2 m-auto mb-2"
      />
      <form onSubmit={handleSubmit} className="flex flex-col px-12">
        <input
          type="file"
          accept="image/*"
          name="file"
          onChange={handleChange}
          required
        ></input>
        <input
          name="title"
          type="text"
          value={product.title ?? ""}
          onChange={handleChange}
          placeholder="제품명"
          required
        ></input>
        <input
          name="price"
          type="number"
          value={product.price ?? ""}
          onChange={handleChange}
          placeholder="가격"
          required
        ></input>
        <input
          name="category"
          type="text"
          value={product.category ?? ""}
          onChange={handleChange}
          placeholder="카테고리"
          required
        ></input>
        <input
          name="description"
          type="text"
          value={product.description ?? ""}
          onChange={handleChange}
          placeholder="제품 설명"
          required
        ></input>
        <input
          name="options"
          type="text"
          value={product.options ?? ""}
          onChange={handleChange}
          placeholder="옵션"
          required
        ></input>
        <Button
          onClick={handleSubmit}
          disabled={isUploading}
          text={isUploading ? "업로드 중..." : "제품 등록하기"}
        />
      </form>
    </section>
  );
}
