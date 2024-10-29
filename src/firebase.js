import { toast } from "react-toastify";

// Toastify
export const showToast = (message, type) => {
    toast[type](message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        icon: type === "success" ? "🎉" : "⚠️",
        style: {
            backgroundColor: type === "success" ? "#48bb78" : "#f56565",
            color: "#fff",
        },
        className: `custom-toast-${type}`,
        bodyClassName: `custom-toast-${type}-body`,
    });
};