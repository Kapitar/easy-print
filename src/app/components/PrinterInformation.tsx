import PrinterCard from "./PrinterCard";
import Queue from "./Queue";

export default function PrinterInformation() {
  return (
    <>
      <div className="printer-card flex justify-between col-span-6 bg-white px-7 py-5 rounded-lg shadow-lg">
        <PrinterCard />
      </div>

      <div className="col-span-6 bg-white rounded-lg px-5 py-5 shadow-lg">
        <Queue />
      </div>
    </>
  );
}
