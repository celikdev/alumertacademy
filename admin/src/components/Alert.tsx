interface AlertProps {
  alertType: "success" | "error";
  alertDescription?: string;
  visible: boolean;
}

const Alert = ({ alertType, alertDescription, visible }: AlertProps) => {
  return (
    <div>
      {alertType === "success" ? (
        <div
          className={`bg-green-100 absolute top-10 right-10 opacity-0 border w-96 transition-all duration-300 border-green-400 text-green-700 px-6 py-4 rounded ${
            visible ? "translate-y-4 opacity-100" : "opacity-0 -translate-y-10"
          }`}
          role="alert"
        >
          <span className="block sm:inline font-semibold text-sm">
            {alertDescription}
          </span>
        </div>
      ) : (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Hata!</strong>
          <span className="block sm:inline">
            {alertDescription || "Bir hata oluştu."}
          </span>
        </div>
      )}
    </div>
  );
};

export default Alert;
