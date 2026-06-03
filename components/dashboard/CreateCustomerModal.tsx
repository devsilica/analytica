"use client";

import { useState } from "react";

import { toast }
from "sonner";

interface Props {

  open: boolean;

  onClose: () => void;

  onSubmit: (
    data: any
  ) => void;

}

export function CreateCustomerModal({

  open,

  onClose,

  onSubmit,

}: Props) {

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  if (!open)
    return null;

  return (

    <div
      className="
        fixed inset-0 z-50
        flex items-center
        justify-center
        bg-black/60
      "
    >

      <div
        className="
          w-full max-w-md
          rounded-2xl
          border border-slate-800
          bg-slate-900
          p-6
        "
      >

        <h2 className="text-xl font-bold">

          Create Customer

        </h2>

        <div className="mt-6 space-y-4">

          <input
            placeholder="Customer Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            className="
              w-full rounded-xl
              border border-slate-700
              bg-slate-950
              p-3
            "
          />

          <input
            placeholder="Customer Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            className="
              w-full rounded-xl
              border border-slate-700
              bg-slate-950
              p-3
            "
          />

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="
              rounded-xl
              border border-slate-700
              px-4 py-2
            "
          >

            Cancel

          </button>

          <button
            onClick={() => {

              if (

                !name.trim() ||

                !email.trim()

              ) {

                toast.error(

                  "Fill all fields"

                );

                return;

              }

              onSubmit({

                name,

                email,

                revenue: 0,

                country:
                  "Nigeria",

                status:
                  "Active",

              });

              setName("");

              setEmail("");

              onClose();

            }}
            className="
              rounded-xl
              bg-blue-600
              px-4 py-2
            "
          >

            Create

          </button>

        </div>

      </div>

    </div>

  );

}