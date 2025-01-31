/* eslint-disable react/prop-types */
import { useState } from "react";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { FaDownload } from "react-icons/fa";
import axios from 'axios';

const GenericPdfDownloader = ({ rootElementId, downloadFileName }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPdfDocument = async () => {
    setIsDownloading(true);

    try {
      const input = document.getElementById(rootElementId);
      if (!input) {
        console.error(`Element with ID '${rootElementId}' not found.`);
        return;
      }

      const canvas = await html2canvas(input, { scale: 2 }); // Adjust the scale
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4"); // Specify page size
      pdf.addImage(
        imgData,
        "JPEG",
        0,
        0,
        pdf.internal.pageSize.getWidth(),
        pdf.internal.pageSize.getHeight()
      );
      pdf.save(`${downloadFileName}.pdf`);
      await axios.put(`${import.meta.env.VITE_NEW_SERVER_URL}/api/v1/counter`, { 'count': 1, isAuthUser: false })
    } catch (error) {
      console.error("Error generating PDF:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      className="absolute bottom-24 text-white rounded right-[24%] flex items-center bg-red-500 px-4 py-2 gap-4"
      onClick={downloadPdfDocument}
      disabled={isDownloading}
    >
      <span>{isDownloading ? "Downloading..." : "Download as PDF"}</span>{" "}
      <FaDownload />
    </button>
  );
};

export default GenericPdfDownloader;
