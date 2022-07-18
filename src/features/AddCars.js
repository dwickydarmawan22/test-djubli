import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { carAdded } from "./carsSlice";

export function AddCars() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [merk, setMerk] = useState("");
  const [grupModel, setGrupModel] = useState("");
  const [model, setModel] = useState("");
  const [tahun, setTahun] = useState("");
  const [statusMobil, setStatusMobil] = useState("");
  const [platNomor, setPlatNomor] = useState("");
  const [fotoMobil, setFotoMobil] = useState("");
  const [error, setError] = useState(null);

  const handleMerk = (e) => setMerk(e.target.value);
  const handleGrupModel = (e) => setGrupModel(e.target.value);
  const handleModel = (e) => setModel(e.target.value);
  const handleTahun = (e) => setTahun(e.target.value);
  const handleStatusMobil = (e) => setStatusMobil(e.target.value);
  const handlePlatNomor = (e) => setPlatNomor(e.target.value);
  const handleFotoMobil = (e) => setFotoMobil(e.target.files[0]);

  const carsAmount = useSelector((state) => state.cars.entities.length);

  const handleClick = () => {
    if (merk, grupModel,model,tahun,statusMobil,platNomor, fotoMobil) {
      dispatch(
        carAdded({
          id: carsAmount + 1,
          merk,
          grupModel,
          model,
          tahun,
          statusMobil,
          platNomor,
          fotoMobil,
        })
      );

      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setMerk("");
    setGrupModel("");
    setModel("");
    setTahun("");
    setStatusMobil("");
    setPlatNomor("");
    setFotoMobil("");
  };

  return (
    <>
      <form>
        <div>
          <label
            htmlFor="merk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Pilih Merk
          </label>
          <select
            id="merk"
            onChange={handleMerk}
            value={merk}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Toyota</option>
            <option>Honda</option>
            <option>BMW</option>
            <option>Lainnya</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            htmlFor="merk"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Merk
          </label>
          <input
            type="text"
            id="merk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nissan"
            onChange={handleMerk}
            value={merk}
            disabled={merk === "Lainnya" ? false : true}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="grupModel"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Grup Model
          </label>
          <input
            type="text"
            id="grupModel"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Kijang Innova"
            onChange={handleGrupModel}
            value={grupModel}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="model"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Model
          </label>
          <input
            type="text"
            id="model"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="2.7 V AT"
            onChange={handleModel}
            value={model}
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="tahun"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Tahun
          </label>
          <input
            type="number"
            id="tahun"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleTahun}
            value={tahun}
          />
        </div>
        <fieldset>
          <legend className="sr-only">Status Mobil</legend>
          <div className="flex items-center mb-4">
            <input
              id="statusMobil"
              type="radio"
              name="statusMobil"
              defaultValue={statusMobil}
              onChange={handleStatusMobil}
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
              defaultChecked
            />
            <label
              htmlFor="statusMobil"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Baru
            </label>
          </div>
          <div className="flex items-center mb-4">
            <input
              id="statusMobil"
              type="radio"
              name="statusMobil"
              onChange={handleStatusMobil}
              defaultValue={statusMobil}
              className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="statusMobil"
              className="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Bekas
            </label>
          </div>
        </fieldset>

        <div className="mb-6">
          <label
            htmlFor="platNomor"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Plat Nomor
          </label>
          <input
            type="text"
            id="platNomor"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handlePlatNomor}
            value={platNomor}
          />
        </div>
        <div>
          <label
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            htmlFor="fotoMobil"
          >
            Unggah foto
          </label>
          <input
            className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            aria-describedby="fotoMobil_help"
            id="fotoMobil"
            type="file"
            value={fotoMobil}
            onChange={handleFotoMobil}
          />
          <div
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="fotoMobil_help"
          >
            Foto mobil digunakan untuk keperluan jual beli
          </div>
        </div>
        {error && error}
        <button
          type="submit"
          onClick={handleClick}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </>
  );
}
