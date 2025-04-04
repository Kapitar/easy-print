import PrinterInformation from "./components/PrinterInformation";

export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-x-2 mt-8">
      <PrinterInformation />
    </div>
  );
}
