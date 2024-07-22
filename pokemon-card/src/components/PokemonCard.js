import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export const PokemonCard = ({ img, title, classes, id }) => {
  const [openModal, setOpenModal] = useState(false);

  const clickPokemon = (title) => {
    setOpenModal(true);
  };

  return (
    <div
      onClick={() => {
        clickPokemon(title);
      }}
      className="container-content"
    >
      <Dialog open={openModal} onClose={()=> setOpenModal(false)} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      {title}
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        <img src={img} />
                      </p>
                      {classes.map((classz) => {
                        return (
                          <p
                            className="text-sm text-gray-500"
                            style={{ color: classz.color }}
                          >
                            {classz.title}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpenModal(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Tắt đi
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <img className="image" src={img} />
      <h3 className="id-style">#{id}</h3>
      <h1 className="title-style">{title}</h1>
      <div>
        {classes.map((cl, index) => {
          const pokemonClassStyle = {
            background: cl.color,
            width: "100px",
            textAlign: "center",
            padding: "5px",
            marginLeft: "10%",
            borderRadius: "15%",
          };
          const pokemonColumn = {
            marginLeft: "5px",
            marginRight: "5px",
            display: "inline-block",
          };
          return (
            <div keys={index} style={pokemonColumn}>
              <p style={pokemonClassStyle}>{cl.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
