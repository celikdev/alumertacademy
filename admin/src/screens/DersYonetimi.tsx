import { useMutation, useQuery } from "@tanstack/react-query";
import { Header, Container, Modal, Alert } from "../components";
import { ClientBase } from "../service/client/ClientBase";
import { HashLoader } from "react-spinners";
import { useState } from "react";

import { uploadImage } from "../service/firebase/uploadImage";
import { queryClient } from "../service/QueryClient";

const DersYonetimi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const { data, isError, isLoading } = useQuery({
    queryKey: ["dersYonetimi"],
    queryFn: () => ClientBase.get("/api/lesson").then((res) => res.data),
  });

  const deleteMutation = useMutation({
    mutationKey: ["deleteLesson"],
    mutationFn: (id: string) =>
      ClientBase.delete(`/api/admin/lesson/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["dersYonetimi"], (old: any) => [
        ...old.filter((ders: any) => ders._id !== variables),
      ]);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  const mutation = useMutation({
    mutationKey: ["addLesson"],
    mutationFn: (form: any) =>
      ClientBase.post("/api/admin/lesson", form, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["dersYonetimi"], (old: any) => [
        ...old,
        variables,
      ]);
      setAlertVisible(true);
      setTimeout(() => {
        setAlertVisible(false);
      }, 2000);
    },
    onError: (e) => {
      console.log(e);
    },
  });

  if (isError) {
    return <div>Error</div>;
  }

  const handleSubmit = (event: any) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    uploadImage(formData.get("dersResmi"), "lessons").then((url: string) => {
      mutation.mutate({
        title: formData.get("dersAdi"),
        price: formData.get("dersFiyati"),
        content: formData.get("dersAciklamasi"),
        imageURL: url,
      });
      setIsOpen(false);
    });
  };

  return (
    <div>
      <Header pageTitle="Ders Yönetimi" />
      <Modal
        height="80%"
        title="Ders Ekle"
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        <div className="w-full flex justify-center mt-10">
          <form
            onSubmit={handleSubmit}
            className=" w-full items-center flex flex-col justify-center gap-4"
          >
            <div className="w-1/2 flex gap-4">
              <input
                autoComplete="off"
                name="dersAdi"
                type="text"
                placeholder="Ders Adı"
                className="border-2 w-1/2 py-2 px-2 text-sm rounded-lg font-semibold outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400"
              />
              <input
                autoComplete="off"
                name="dersFiyati"
                type="text"
                placeholder="Ders Fiyatı"
                className="border-2 w-1/2 py-2 px-2 text-sm rounded-lg font-semibold outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400"
              />
            </div>
            <div className="flex items-center justify-center w-1/2">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    aria-hidden="true"
                    className="w-10 h-10 mb-3 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                    ></path>
                  </svg>
                  <p
                    id="title"
                    className="mb-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    <span className="font-semibold">
                      Yüklemek İçin Tıklayın
                    </span>{" "}
                    veya buraya sürükleyin
                  </p>
                </div>
                <input
                  name="dersResmi"
                  id="dropzone-file"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    document.querySelector(
                      "#title"
                    )!.textContent = `Seçilen: ${file.name}`;
                  }}
                  type="file"
                  className="hidden"
                />
              </label>
            </div>
            <textarea
              autoComplete="off"
              name="dersAciklamasi"
              className="w-1/2 border-2 py-2 px-2 text-sm rounded-lg font-semibold outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400"
              placeholder="Ders Açıklaması"
            />
            <button
              type="submit"
              className="border-2 px-10 py-2 rounded-lg text-sm font-semibold border-blue-400 transition-colors duration-300 hover:bg-blue-400 hover:text-white"
            >
              Ekle
            </button>
          </form>
        </div>
      </Modal>
      <Alert
        alertType="success"
        alertDescription="Ders Başarıyla Eklendi!"
        visible={alertVisible}
      />
      <div className="w-full px-20 py-4 flex items-center justify-end">
        <button
          onClick={() => setIsOpen(true)}
          className="border-2 px-10 py-2 rounded-lg text-sm font-semibold border-blue-400 transition-colors duration-300 hover:bg-blue-400 hover:text-white"
        >
          Ekle
        </button>
      </div>
      {isLoading ? (
        <div className="flex items-center justify-center h-96 w-full ">
          <HashLoader color="#2563EB" loading={true} size={50} />
        </div>
      ) : data.length ? (
        <Container>
          <div className="grid grid-cols-4 gap-10">
            {data.map((ders: any) => (
              <button
                onClick={() =>
                  confirm("Silmek istediğinize emin misiniz?") &&
                  deleteMutation.mutate(ders._id)
                }
                key={ders._id}
                className="flex flex-col items-center space-x-4 mt-6 p-4 gap-4 shadow-lg bg-gray-200 rounded-lg transition-colors duration-300 hover:bg-gray-300"
              >
                <img
                  src={ders.imageURL}
                  alt={ders.title}
                  className="object-cover rounded-md w-[300px] h-[300px]"
                />
                <h2 className="font-semibold text-sm">{ders.title}</h2>
                <h2 className="font-semibold">{ders.price} ₺</h2>
              </button>
            ))}
          </div>
        </Container>
      ) : (
        <h1 className="text-center">Ders İçeriği Bulunamadı!</h1>
      )}
    </div>
  );
};

export default DersYonetimi;
