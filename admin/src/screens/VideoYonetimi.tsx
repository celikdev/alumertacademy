import { useMutation, useQuery } from "@tanstack/react-query";
import { Header, Container, Modal, Alert } from "../components";
import { ClientBase } from "../service/client/ClientBase";
import { HashLoader } from "react-spinners";
import { useState } from "react";

import { queryClient } from "../service/QueryClient";
import { GarbageIcon } from "../assets/icons";

const VideoYonetimi = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const { data, isError, isLoading } = useQuery({
    queryKey: ["videoYonetimi"],
    queryFn: () => ClientBase.get("/api/video").then((res) => res.data),
  });

  const deleteMutation = useMutation({
    mutationKey: ["deleteVideo"],
    mutationFn: (id: string) =>
      ClientBase.delete(`/api/admin/video/${id}`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["videoYonetimi"], (old: any) => [
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
      ClientBase.post("/api/admin/video", form, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      }),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(["videoYonetimi"], (old: any) => [
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
    mutation.mutate({
      link: formData.get("videoLinki"),
    });
    setIsOpen(false);
  };

  return (
    <div>
      <Header pageTitle="Video Yönetimi" />
      <Modal
        height="40%"
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
                name="videoLinki"
                type="text"
                placeholder="Video Linki"
                className="border-2 w-full py-2 px-2 text-sm rounded-lg font-semibold outline-none transition-colors duration-300 hover:border-blue-400 focus:border-blue-400"
              />
            </div>
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
        alertDescription="Video Başarıyla Eklendi!"
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
            {data.map((video: any) => (
              <button
                onClick={() =>
                  confirm("Silmek istediğinize emin misiniz?") &&
                  deleteMutation.mutate(video._id)
                }
                key={video._id}
                className="flex flex-col items-center space-x-4 mt-6 p-4 gap-4 shadow-lg bg-gray-200 group relative rounded-lg transition-colors duration-300 hover:bg-gray-300 max-h-[400px] h-[400px]"
              >
                <div className="transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:filter group-hover:backdrop-brightness-50 absolute top-0 left-0 z-10 w-full h-full flex items-center justify-center">
                  <GarbageIcon className="fill-white w-32 h-32 group-hover:opacity-100" />
                </div>
                <iframe
                  src={video.link}
                  className="object-cover rounded-md w-[300px] h-[300px]"
                />
              </button>
            ))}
          </div>
        </Container>
      ) : (
        <h1 className="text-center">Video İçeriği Bulunamadı!</h1>
      )}
    </div>
  );
};

export default VideoYonetimi;
