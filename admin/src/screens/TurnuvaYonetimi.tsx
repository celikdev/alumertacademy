import { useMutation, useQuery } from "@tanstack/react-query";
import { Header, Container, Modal, Alert } from "../components";
import { ClientBase } from "../service/client/ClientBase";
import { HashLoader } from "react-spinners";
import { useState } from "react";

import { uploadImage } from "../service/firebase/uploadImage";
import { queryClient } from "../service/QueryClient";
import { GarbageIcon } from "../assets/icons";

const TurnuvaYonetimi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["turnuvaYonetimi"],
    queryFn: () => ClientBase.get("/api/tournament").then((res) => res.data),
  });

  const deleteMutation = useMutation({
    mutationKey: ["deleteInstructor"],
    mutationFn: (id: string) =>
      ClientBase.delete(`/api/admin/tournament/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["turnuvaYonetimi"], (old: any) => [
        ...old.filter((turnuva: any) => turnuva._id !== variables),
      ]);
    },
    onError: (e) => {
      console.log(e);
    },
  });
  const mutation = useMutation({
    mutationKey: ["addInstructor"],
    mutationFn: (form: any) =>
      ClientBase.post("/api/admin/tournament", form, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["turnuvaYonetimi"], (old: any) => [
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
    uploadImage(formData.get("turnuvaResmi"), "tournament").then(
      (url: string) => {
        mutation.mutate({
          title: formData.get("turnuvaAdi"),
          content: formData.get("turnuvaAciklamasi"),
          imageURL: url,
        });
        setIsOpen(false);
      }
    );
  };

  return (
    <div>
      <Header pageTitle="Turnuva Yönetimi" />
      <Modal
        height="80%"
        title="Eğitmen Ekle"
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
                name="turnuvaAdi"
                type="text"
                placeholder="Turnuva Adı"
                className="border-2 w-full py-2 px-2 text-sm rounded-lg font-semibold outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400"
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
                    className="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center"
                  >
                    <span className="font-semibold">
                      Yüklemek İçin Tıklayın
                    </span>{" "}
                    veya buraya sürükleyin
                  </p>
                </div>
                <input
                  name="turnuvaResmi"
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
              name="turnuvaAciklamasi"
              className="w-1/2 border-2 py-2 px-2 text-sm rounded-lg font-semibold outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400"
              placeholder="Turnuva Açıklaması"
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
        alertDescription="Turnuva Başarıyla Eklendi!"
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
            {data.map((turnuva: any) => (
              <button
                onClick={() =>
                  confirm("Silmek istediğinize emin misiniz?") &&
                  deleteMutation.mutate(turnuva._id)
                }
                key={turnuva._id}
                className="flex flex-col items-center space-x-4 mt-6 p-4 gap-4 shadow-lg bg-gray-200 group relative rounded-lg transition-colors duration-300 hover:bg-gray-300 max-h-[400px] h-[400px]"
              >
                <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:filter group-hover:backdrop-brightness-50 absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
                  <GarbageIcon className="fill-white w-32 h-32 group-hover:opacity-100" />
                </div>
                <img
                  src={turnuva.imageURL}
                  alt={turnuva.title}
                  className="object-cover rounded-md w-[300px] h-[300px]"
                />
                <h2 className="font-semibold text-sm">{turnuva.title}</h2>
                <p className="text-xs truncate w-11/12 font-medium">
                  {turnuva.content}
                </p>
              </button>
            ))}
          </div>
        </Container>
      ) : (
        <h1 className="text-center">Turnuva İçeriği Bulunamadı!</h1>
      )}
    </div>
  );
};

export default TurnuvaYonetimi;
